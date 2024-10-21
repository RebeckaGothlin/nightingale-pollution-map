import { AddressIcon } from "../components/AddressIcon";
import { LinkedInIcon } from "../components/LinkedInIcon";
import { MailIcon } from "../components/MailIcon";

export const Contact = () => {
  return (
    <>
      <section>
        <h2>Contact</h2>
        <h3>Find us at:</h3>
        <p><AddressIcon /> <br/>
         Data Mining <br/> 
          Johannes Gutenberg University <br/>
          Staudingerweg 9 <br/>
          55128 Mainz, Germany{" "}</p>
        
        <p>
          <MailIcon /> hlane@uni-mainz.de
        </p>
        <p><a href="https://www.linkedin.com/company/nightingaleproject-johannesgutenberguniversitat.com/posts/?feedView=all">
          <LinkedInIcon /> Our LinkedIn
        </a></p>
      </section>
    </>
  );
};
