import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";

const SweepstakesPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      
      <div className="uk-section">
        <div className="uk-center uk-width-2-3" style={{marginLeft:"16.67%"}}>
            <h4 style={{textAlign:"center",color:"#000000"}}>SWEEPSTAKES OFFICIAL RULES</h4>
            <p style={{color:"#000000"}}>NO PURCHASE IS NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. ALL FEDERAL, STATE, LOCAL, AND MUNICIPAL LAWS AND REGULATIONS APPLY. VOID WHERE PROHIBITED</p>
            <br></br>
            <ol>
              <li style={{color:"#000000"}}><strong>Eligibility:</strong> The CLEAN HEART MAIDS SWEEPSTAKES (“CHM”) is open to legal residents of the fifty (50) United States and the District of Columbia who are at least eighteen (18) years old at the time of the entry. This Sweepstakes is subject to federal, state, and local laws and regulations and void where prohibited by law. NWA Daily's owners, its subsidiaries, affiliates, suppliers, partners, advertising and promotion agencies, and directors, as well as members of an Employees' immediate family and/or those living in the same household of Employees are ineligible to win in the Sweepstakes.</li>
              <li style={{color:"#000000"}}><strong>Sponsorship:</strong> The sponsor is NWA Daily, LLC (“Sponsor”), located at PO Box 8061, Fayetteville, AR 72703. Sponsor will conduct the Sweepstakes substantially as described in these Official Rules.</li>
              <li style={{color:"#000000"}}><strong>Agreement to Rules:</strong> By entering this Sweepstakes, the Entrant (“You”) agrees to abide by the Sponsor's Official Rules and decisions, which are fully and unconditionally binding in all respects. The Sponsor reserves the right to refuse, withdraw, or disqualify any entry at any time at the Sponsor’s sole discretion. By entering this Sweepstakes You represent and warrant that You are eligible to participate based on eligibility requirements explained in the Official Rules. You also agree to accept the decisions of the Sponsor as final and binding as it relates to the content of this CHM Sweepstakes. Participation in the Sweepstakes constitutes entrant’s full and unconditional agreement to the acceptance of these Official Rules and the decisions of the Sponsor, which are final and binding. Winning a prize is contingent upon being compliant with these Official Rules and fulfilling all other requirements set forth herein.</li>
              <li style={{color:"#000000"}}><strong>Sweepstakes Period:</strong> This promotion begins on March 14, 2022 at 8:00am CT and ends on March 18, 2022 at 8:00pm CT (“Entry Period”). Entries that are submitted before or after the Entry Period will be disqualified. Sponsor’s computer is the official timekeeper. Submissions will be accepted for the duration of the Sweepstakes by using Instagram and Sponsors website.</li>
              <li style={{color:"#000000"}}><strong>How to Enter:</strong> Eligible Entrants can enter the CHM Sweepstakes by subscribing their email to Sponsor’s Services via their online landing page www.northwestarkansasdaily.com. Each individual tagged on the Sponsor’s Instagram post by an Entrant and shared on their Instagram Story is considered one (1) additional entry. As a participant, your entry must fully meet all Sweepstakes requirements, as specified in the Official Rules, in order to be eligible to win the prize. Incomplete entries or those that do not adhere to the Official Rules or specifications will be disqualified at the Sponsor's sole discretion.</li>
              <li style={{color:"#000000"}}><strong>Prize Drawing:</strong> The Winner of the CHM Sweepstakes (the “Winner”) will receive: a residential home cleaning service from Clean Heart Maids up to, not to exceed, $500.00. The prize shall be determined solely by the Sponsor. There shall be no cash or other prize substitution permitted except at the Sponsor’s discretion. The prize is non-transferable. The Winner, upon acceptance of the prize, is solely responsible for all expenses related to the prize, including without limitation any and all local, state, and federal taxes. The Winner shall not transfer assignment of the prize to others nor shall the Winner request the cash equivalent or prize substitution. By accepting the prize, the selected Winner grants permission for the Sponsor to use the Winner’s likeness, entry, and/or name for purposes of advertising and trade without further compensation unless prohibited by law.</li>
              <li style={{color:"#000000"}}><strong>Selection and Notification of Winner:</strong> The Winner will be selected by a random drawing under the supervision of the Sponsor. On or about March 18, 2022 at 8:00pm CT, the Sponsor will select potential Winner in a random selection from among all eligible entries received. The odds of being selected depend upon the number of entries received. The Sponsor will attempt to notify the potential Winner via Instagram direct message on March 18, 2022. If the potential Winner cannot be contacted within twenty-four (24) hours after the first attempt to contact him/her, the sponsor may select an alternative potential Winner in his/her place at random from the remaining non-winning, eligible entries.  The Sponsor is not responsible for nor shall have any liability for the Winner's failure to receive notices due to security settings that may cause notifications to be marked as spam or junk inbox. Nor shall the Sponsor be liable for the Winner’s provision of incorrect or otherwise non-functioning contact information. Receipt of the prize (offered in the CHM Sweepstakes) by the Winner is upon the condition of compliance with any and all federal, state, and local laws and regulations. IF THE WINNER VIOLATES ANY OF THESE OFFICIAL RULES, THE WINNER (AT THE SPONSOR’S SOLE DISCRETION) WILL BE DISQUALIFIED, AND ALL PRIVILEGES AS WINNER WILL BE IMMEDIATELY TERMINATED.</li>
              <li style={{color:"#000000"}}><strong>General Conditions:</strong> In the event that the operation, security, or administration of the Sweepstakes is impaired in any way for any reason, including, but not limited to fraud, virus, bug, worm, a change to any applicable terms of service, unauthorized human intervention or other technical problem, or in the event the Sweepstakes is unable to run as planned for any reason, as determined by Sponsor in their sole discretion, the Sponsor may, in their sole discretion, either (a) suspend the Sweepstakes to address the impairment and then resume the Sweepstakes in a manner that best conforms to the spirit of these Official Rules or (b) terminate the Sweepstakes and, in the event of termination, award the prize at random from among the eligible entries received up to the time of the impairment. The Sponsor reserves the right in their sole discretion to disqualify any individual they find to be tampering with the entry process or the operation of the Sweepstakes or to be acting in violation of these Official Rules or in an unsportsmanlike or disruptive manner. Any attempt by any person to damage the website or undermine the legitimate operation of the Sweepstakes may be a violation of criminal and civil law, and, should such an attempt be made, the Sponsor reserve the right to seek damages (including attorney’s fees) and any other remedies from any such person to the fullest extent permitted by law. Failure by the Sponsor to enforce any provision of these Official Rules shall not constitute a waiver of that provision, any rights or remedies available to the Sponsor, whether set forth in these Official Rules or elsewhere. Proof of sending any communication to Sponsor by mail shall not be deemed proof of receipt of that communication. In the event of a dispute as to the owner of an online entry, the authorized account holder of the e-mail address used to enter will be deemed to be the owner.</li>
              <li style={{color:"#000000"}}><strong>Rights Granted by You:</strong> By submitting an entry by either subscribing to Sponsor’s newsletter or tagging an individual on the Instagram post into this Sweepstakes, You understand and agree that the Sponsor, any individual acting on the Sponsor’s behalf, and the licensees successors, and assigns of the Sponsor shall, where permitted by law, have the right to print, publish, broadcast, distribute and use in any media known now or hereafter developed, in perpetuity, worldwide, and without limitation, your submission, name, photo, portrait, voice, likeness, image, statements about the CHM Sweepstakes, and your biographical information for news, publicity, advertising, promotional purposes, trade, information, and public relations without any further notice, review, consent, compensation, or remuneration.</li>
              <li style={{color:"#000000"}}><strong>Limitation of Liability:</strong> Your entry into this Sweepstakes constitutes Your agreement to release and hold harmless the Sponsor and its subsidiaries, representatives, affiliates, partners, advertising and promotion agencies, successors, agents, assigns, directors, employees, and officers against and from any and all claims, liability, illness, injury, death, litigation, loss, or damages that may occur, directly or indirectly from participation in the Sweepstakes or and/or the 1) Winner accepting, possessing, using, or misusing of any awarded prize or any portion thereof; 2) any type of technical failure; 3) the unavailability or inaccessibility of any transmissions, phone, or Internet service; 4) unauthorized intervention in any part of the entry process or the Promotion; 5) electronic error or human error in the Promotion administration or the processing of entries.</li>
              <li style={{color:"#000000"}}><strong>Release and Limitations of Liability:</strong> By participating in the Sweepstakes, entrants agree to release and hold harmless, collectively and individually, the Sponsor, advertising and promotion agencies, other companies associated with the Sweepstakes, and each of their respective parent companies, subsidiaries, affiliates, officers, directors, employees, shareholders, representatives, and agents (the “Released Parties”) from and against any claim or cause of action arising out of participation in the Sweepstakes or receipt or use of any Prize (including any travel or activity related thereto), including, but not limited to: (a) any technical errors associated with the Sweepstakes, including lost, interrupted or unavailable Internet Service Provider (ISP), network, server, wireless service provider, or other connections, availability or accessibility or miscommunications or failed computer, satellite, telephone, cellular tower or cable transmissions, lines, or technical failure or jumbled, scrambled, delayed, or misdirected transmissions or computer hardware or software malfunctions, failures or difficulties; (b) unauthorized human intervention in the Sweepstakes; (c) mechanical, network, electronic, computer, human, printing or typographical errors; (d) application downloads, (e) any other errors or problems in connection with the Sweepstakes, including, without limitation, a changes to any applicable terms of service, errors that may occur in the administration of the Sweepstakes or the processing of entries, the announcement of the Winner, the cancellation or postponement of the event and/or the flyover, if applicable, the incorrect downloading of the application the processing of entries application downloads or in any Sweepstakes-related materials; (f) injury, death, losses or damages of any kind, to persons or property which may be caused, directly or indirectly, in whole or in part, from entrants participation in the Sweepstakes or acceptance, receipt or misuse of the prize (including any travel or activity related thereto); or (g) lost, late, postage-due, misdirected, or undeliverable mail. Entrant further agrees that in any cause of action, the Released Parties liability will be limited to the cost of entering and participating in the Sweepstakes, and in no event shall the entrant be entitled to receive attorney’s fees. Released Parties are also not responsible for any incorrect or inaccurate information, whether caused by site users, tampering, hacking, or by any equipment or programming associated with or utilized in the Sweepstakes. Entrant waives the right to claim any damages whatsoever, including, but not limited to, punitive, consequential, direct, or indirect damages.</li>
              <li style={{color:"#000000"}}><strong>Disputes:</strong> THIS SWEEPSTAKES IS GOVERNED BY THE LAWS OF ARKANSAS, WITHOUT RESPECT TO CONFLICT OF LAW DOCTRINES. The Entrant agrees, as a condition of participating in this promotion, that if any disputes cannot be resolved between the Entrant and the Sponsor, and if causes of action arise out of or are connected with this Sweepstakes, they shall be individually resolved exclusively before a court located in Arkansas having jurisdiction, without resorting to any form of class action. Under no circumstances in any such dispute shall the participant be permitted to obtain awards for, and hereby waives all rights to, punitive, incidental, or consequential damages, including reasonable attorney’s fees, other than participant’s actual out-of-pocket expenses (i.e. costs associated with entering this Sweepstakes). The participant waives all rights to have damages multiplied or increased. Except where prohibited, each entrant agrees that any and all disputes, claims, and causes of action arising out of, or connected with, the sweepstakes or any prize awarded shall be resolved individually, without resort to any form of class action, and exclusively by the appropriate court located in Arkansas. All issues and questions concerning the construction, validity, interpretation and enforceability of these Official Rules, entrants rights and obligations, or the rights and obligations of the Sponsor in connection with the Sweepstakes, shall be governed by, and constructed in accordance with, the state laws of Arkansas, without giving effect to any choice of law or conflict of law rules, which would cause the application of the laws of any jurisdiction other than Arkansas.</li>
              <li style={{color:"#000000"}}><strong>Privacy Policy:</strong> Information submitted with an entry is subject to the Privacy Policy stated on the NWA Daily website. Click here www.northwestarkansasdaily.com to read the Privacy Policy.</li>
              <li style={{color:"#000000"}}><strong>Winners List:</strong> You may obtain a copy of the Winner’s name or a copy of these Official Rules, by sending your request via mail with a stamped, self-addressed envelope to: Attn: NWA Daily, LLC, PO Box 8061, Fayetteville, AR 72703.  </li>
              <li style={{color:"#000000"}}><strong>Social Media Channel-Specific Rules:</strong> Sweepstakes hosted by NWA Daily, LLC is in no way sponsored, endorsed, administered by, or associated with Facebook, Instagram, Twitter, the NCAA, or the University of Arkansas.</li>
            </ol>
            </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;

export default SweepstakesPage;
