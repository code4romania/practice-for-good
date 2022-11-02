import axios from 'axios';
// import crypto from 'crypto';

import CryptoJS from 'crypto-js';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 100000,
  headers: {
    // 'Content-Type': 'application/json',
    authorization: `apiKey ${process.env.REACT_APP_API_KEY}`,
  },
});

API.interceptors.request.use(async (request) => {
  try {
    // Needed HMAC Request
    if (request?.headers) {
      request.headers.timestamp = new Date().toUTCString();

      // 1. Build the query string
      const queryString = buildQueryString(request?.params || []);

      // 2. Serialize body object
      const bodyData = buildBodyData(request);

      // 3. Compute signature
      const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
      if (SECRET_KEY !== undefined) {
        const method = request?.method?.toUpperCase() || '';
        const URL = request.url || '';
        const headers = { ...request.headers };
        const canonical = canonicalize(method, URL, queryString, headers, bodyData);

        // SIGN HERE
        const signature = sign(canonical, SECRET_KEY);

        // Populate the HTTP authorization header
        request.headers['signature'] = `simple-hmac-auth sha256 ${signature}`;
      }
    }
  } catch (err) {
    return request;
  }

  return request;
});

const buildQueryString = (params: { key: string; value: any }[]) => {
  if (!params) return '';

  // Sort query keys alphabetically
  const keys = Object.keys(params).sort();

  let queryString = '';

  keys.forEach((key: any, index) => {
    let value: any = params[key];

    if (['string', 'number', 'boolean'].includes(typeof value)) {
      value = String(value);
    } else {
      try {
        value = JSON.stringify(value);
      } catch (e: any) {
        fail({ error: e, details: `Could not serialize parameter ${key}: ${e.message}` });
        return;
      }
    }

    value = encodeURIComponent(value as string);
    key = encodeURIComponent(key);

    queryString += `${key}=${value}`;

    if (index !== keys.length - 1) {
      queryString += '&';
    }
  });

  return queryString;
};

const buildBodyData = (request: any) => {
  const data = request?.data;
  let bodyData;
  if (data !== undefined) {
    if (typeof data === 'string') {
      bodyData = data;
    } else {
      try {
        bodyData = JSON.stringify(data);
        request.headers['content-type'] = 'application/json';
      } catch (e: any) {
        fail({ error: e, details: `Could not serialize input data: ${e.message}` });
      }
    }
  }

  if (bodyData !== undefined) {
    request.headers['content-length'] = String(Buffer.byteLength(bodyData));
  }

  return bodyData;
};

API.interceptors.response.use(
  async (response) => {
    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (error: any) => {
    if (error.response.status === 403) {
      window.location.href = '/';
    }

    throw error;
  },
);

export const headerWhitelist = [
  'authorization',
  'timestamp',
  'date',
  'content-length',
  'content-type',
];

/**
 * Generate a string for a request
 * @param   {string} method      The HTTP method. GET, POST, DELETE, etc.
 * @param   {string} uri         The path of the request
 * @param   {object} queryString The full query string
 * @param   {object} headers     An object containing all headers
 * @param   {string} data        The body contents
 * @returns {string} A string representing the request
 */
export function canonicalize(
  method: string,
  uri: string,
  queryString = '',
  // headers: { [key: string]: string },
  headers: any,
  data?: string,
): string {
  // Hash the method, the path, alphabetically sorted headers, alphabetically sorted GET parameters, and body data

  method = method.toUpperCase();

  if (queryString === undefined || queryString === null) {
    queryString = '';
  }

  if (data === undefined || data === null) {
    data = '';
  }

  // Create a new list of headers, with the keys all lower case. Do this before sorting them, to make sure we don't bork the sort.
  const cleanHeaders: { [key: string]: string } = {};

  console.log(Object.entries(headers));
  // eslint-disable-next-line prefer-const
  for (let [key, value] of Object.entries(headers)) {
    key = key.toLowerCase();

    if (!headerWhitelist.includes(key)) {
      continue;
    }

    if (key === 'content-length' && value === '0') {
      continue;
    }

    cleanHeaders[key] = value as any;
  }

  // Get the list of all header keys
  const headerKeys = Object.keys(cleanHeaders);

  // Sort the header keys alphabetically
  headerKeys.sort();

  // Create a string of all headers, arranged alphabetically, separated by newlines
  let headerString = '';

  for (const [index, key] of headerKeys.entries()) {
    let value = cleanHeaders[key];

    // Make sure our value is a string, so we can trim it
    if (typeof value !== 'string') {
      value = `${value}`;
    }

    headerString += `${key}:${value.trim()}`;

    if (index !== headerKeys.length - 1) {
      headerString += '\n';
    }
  }

  // const dataHash = crypto.createHash('sha256').update(data, 'utf8').digest('hex');
  console.log('DATA', data);
  console.log(headerString);
  const dataHash2 = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  /*
    The string format is:
        method + \n
        URL + \n
        Alphabetically sorted query string with individually escaped keys and values + \n
        Alphabetically sorted headers with lower case keys, separated by newlines + \n
        Hash of body, or hash of blank string if body is empty

    Or:
        POST
        /items/
        great=true&great%20test=123&test=testing%20true
        a-api-key:12345
        content-length:15
        (hash)
    */

  let string = '';

  string += `${method}\n`;
  string += `/${uri}\n`;
  string += `${queryString}\n`;
  string += `${headerString}\n`;
  string += dataHash2;

  console.log(string);
  return string;
}

function sign(canonical: any, secret: any) {
  console.log('SECRET', secret);
  return CryptoJS.HmacSHA256(canonical, secret).toString(CryptoJS.enc.Hex);
}

export default API;
