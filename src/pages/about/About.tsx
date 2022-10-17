import React from 'react';
import p4gLogo from '../../assets/images/p4g-big-logo.svg';
import ongHubLogo from '../../assets/images/onghub-logo.svg';

const About = () => {
  return (
    <div className="p-10 lg:p-20">
      <div className="grid lg:grid-cols-2">
        <div>
          <img src={p4gLogo} alt="Practice for Good - logo" className="block mx-auto lg:ml-0" />
        </div>
        <div className="font-titillium pt-10">
          <p className="text-center text-big lg:text-left">Despre Practice for Good</p>
          <div className="text-center text-small pt-10">
            <div className="pb-10 lg:px-20">
              <p>
                Lorem ipsum. Centru Civic este primul centralizator al serviciilor pe care
                societatea civilă le pune la dispoziția cetățenilor români. Soluția a pornit ca un
                agregator al tuturor aplicațiilor civice dezvoltate de ONG-uri, instituții sau
                cetăţeni din România. În noua versiune, Centru Civic va deveni locul unde, printr-o
                căutare simplă, fiecare cetățean va avea la dispoziție informațiile necesare despre
                toate serviciile oferite de sectorul ONG care vizează o anumită problemă, scoțând în
                evidență importanța și amploarea sectorului non-profit în societatea românească.
                Lorem ipsum. Centru Civic este primul centralizator al serviciilor pe care
                societatea civilă le pune la dispoziția cetățenilor români. Soluția a pornit ca un
                agregator al tuturor aplicațiilor civice dezvoltate de ONG-uri, instituții sau
                cetăţeni din România. În noua versiune, Centru Civic va deveni locul unde, printr-o
                căutare simplă, fiecare cetățean va avea la dispoziție informațiile necesare despre
                toate serviciile oferite de sectorul ONG care vizează o anumită problemă, scoțând în
                evidență importanța și amploarea sectorului non-profit în societatea românească.
                Lorem ipsum. Centru Civic este primul centralizator al serviciilor pe care
                societatea civilă le pune la dispoziția cetățenilor români. Soluția a pornit ca un
                agregator al tuturor aplicațiilor civice dezvoltate de ONG-uri, instituții sau
                cetăţeni din România. În noua versiune, Centru Civic va deveni locul unde, printr-o
                căutare simplă, fiecare cetățean va avea la dispoziție informațiile necesare despre
                toate serviciile oferite de sectorul ONG care vizează o anumită problemă, scoțând în
                evidență importanța și amploarea sectorului non-profit în societatea românească.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="pt-10 grid lg:grid-cols-2">
        <div>
          <img src={ongHubLogo} alt="ONGHub - logo" className="block mx-auto lg:ml-0" />
        </div>
        <div className="font-titillium pt-10">
          <p className="text-center text-big lg:text-left">Despre ONG Hub</p>
          <div className="text-center text-small pt-10">
            <div className="lg:px-20">
              <p>
                Lorem ipsum. Centru Civic este primul centralizator al serviciilor pe care
                societatea civilă le pune la dispoziția cetățenilor români. Soluția a pornit ca un
                agregator al tuturor aplicațiilor civice dezvoltate de ONG-uri, instituții sau
                cetăţeni din România. În noua versiune, Centru Civic va deveni locul unde, printr-o
                căutare simplă, fiecare cetățean va avea la dispoziție informațiile necesare despre
                toate serviciile oferite de sectorul ONG care vizează o anumită problemă, scoțând în
                evidență importanța și amploarea sectorului non-profit în societatea românească.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
