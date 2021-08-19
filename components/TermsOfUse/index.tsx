import Link from 'next/link';
import styles from './TermsOfUse.module.scss';

export function TermsOfUse(): JSX.Element {
    const homeURL = 'www.debtadvisorsofamerica.com';
    const email = 'info@contactdaa.com';

    return (
        <section className={styles['terms-of-use']}>
            <h1>{`Binding Effect`}</h1>
            <p>
                {`These Terms of Use constitute a legally binding agreement made between Debt Resolution Direct, LLC d/b/a Debt Advisors of America Company and you, the person accessing `}
                <Link href="/"><a>{homeURL}</a></Link>
                {`, including any content, functionality and services offered on or through `}
                <Link href="/"><a>{homeURL}</a></Link>
                {` and any of its affiliated websites (collectively, “Website”) whether personally or on behalf of an entity (“you” or “your”). These Terms of Use are in addition to any other agreements between you and Company, including any customer or account agreements and any other agreements that govern your use of the Website and information provided by Company (collectively, “Agreements”).`}
            </p>
            <p>
                {`Please read the Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at `}
                <Link href="/privacy-policy"><a>{`${homeURL}/privacy-policy`}</a></Link>
                {` and incorporated herein by reference.`}
            </p>
            <p>
                {`Additional terms, including without limitation those set forth in any Agreements, may govern your use of the Website. In the event that any provision, term or guideline contained in such Agreements conflicts with these Terms of Use, the terms of such Agreements shall control over these Terms of Use. You further acknowledge that these Terms of Use, together with Company’s Privacy Policy and terms of the Agreements, represent the complete and exclusive statement of the agreement between you and the Company and supersede any proposal or prior agreement oral or written, and any other communications between us relating to your access or use of the Website.`}
            </p>
            <p>
                {`YOU AGREE THAT BY USING THE WEBSITE YOU REPRESENT THAT YOU ARE AT LEAST 18 YEARS OLD AND THAT YOU ARE LEGALLY ABLE TO ENTER INTO THIS AGREEMENT. IF YOU DO NOT AGREE WITH THIS TERMS OF USE IN ITS ENTIRETY, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE WEBSITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.`}
            </p>
            <h2>{`Privacy Policy`}</h2>
            <p>
                {`Company respects your privacy and permits you to control the treatment of your personal information. A complete statement of Company’s privacy policy can be found by clicking here. Please see our Privacy Policy for further information, which explains the policies put in place and used by us to protect your personal information and your privacy as you visit and use the Website and our other services.`}
            </p>
            <h2>{`Registration`}</h2>
            <p>
                {`You acknowledge and agree that certain functionalities and services made available through the Website require users to register prior to being granted access. We reserve the right to restrict certain areas of information on the Website to such registered users.`}
            </p>
            <p>
                {`When you are required to open an account to use or access the Website, you must complete the registration process by providing the complete and accurate information requested on the registration form. You will also be asked to provide a user name and password. You are entirely responsible for maintaining the confidentiality of your password. You may not use the account, username, or password of someone else at any time. You agree to notify Company immediately on any unauthorized use of your account, user name, or password. Company shall not be liable for any loss that you incur as a result of someone else using your password, either with or without your knowledge. You may be held liable for any losses incurred by Company, its affiliates, officers, directors, employees, consultants, agents, and representatives due to someone else’s use of your account or password.`}
            </p>
            <p>
                {`Where any functionality or service requires registration, you agree that you will comply with the registration process and observe and be bound by all documentation incorporated by reference into this Terms of Use or other rules, terms and conditions governing your access to and use of such functionality or service including but not limited to any Agreements. You agree that you will maintain and promptly update your account information to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or we have reasonable grounds to suspect such, we reserve the right to immediately terminate your account and refuse any and all current or future use of the Website by you.`}
            </p>
            <h2>{`Use of Software`}</h2>
            <p>
                {`Company may make certain software available to you from the Website. If you download software from the Website, the software, including all files and images contained in or generated by the software, and accompanying data (collectively, “Software”) are deemed to be licensed to you by Company, for your personal, noncommercial, home use only. Company does not transfer either the title or the intellectual property rights to the Software, and Company retains full and complete title to the Software as well as all intellectual property rights therein. You may not sell, redistribute, or reproduce the Software, nor may you decompile, reverse-engineer, disassemble, or otherwise convert the Software to a human-perceivable form.`}
            </p>
            <h2>{`User Content`}</h2>
            <p>
                {`You grant Company a license to use the materials you post to the Website. By posting, downloading, displaying, performing, transmitting, or otherwise distributing information or other content (“User Content”) to the Website, you are granting Company, its affiliates, officers, directors, employees, consultants, agents, and representatives a license to use User Content in connection with the operation of the business of Company, its affiliates, officers, directors, employees, consultants, agents, and representatives, including without limitation, a right to copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate, and reformat User Content. You will not be compensated for any User Content. By posting User Content on the Website, you warrant and represent that you own the rights to the User Content or are otherwise authorized to post, distribute, display, perform, transmit, or otherwise distribute User Content.`}
            </p>
            <h2>{`Website Content`}</h2>
            <p>
                {`The Website may provide general information about our products and services. Your eligibility for particular products and services is subject to our final determination, restrictions, and acceptance. You agree to accept our final determination and conditions. We may discontinue or make changes to the information, products, licenses, or services described on the Website at any time. Any dated information is published as of its publication date only. We do not undertake any obligation or responsibility to update or amend any such information. We reserve the right to terminate any or all offerings without prior notice. Furthermore, by offering information, products, or services via this Website, no solicitation is made by us to any person to use such information, products, or services in jurisdictions where the provision of information, products, or services is prohibited by law.`}
            </p>
            <h2>{`Intellectual Property `}</h2>
            <p>
                {`When accessing the Website you agree to obey the law and to respect the intellectual property rights of others. Your use of the Website is at all times governed by and subject to laws regarding copyright ownership and use of intellectual property. You agree not to upload, download, display, perform, transmit, or otherwise distribute any information or content (collectively, “Content”) in violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. You agree to abide by laws regarding copyright ownership and use of intellectual property, and you shall be solely responsible for any violations of any relevant laws and for any infringements of third-party rights caused by any Content you provide or transmit, or that is provided or transmitted using your user identifying information. The burden of proving that any Content you provide or transmit does not violate any laws or third-party rights rests solely with you.`}
            </p>
            <p>
                {`The Website’s content, including but not limited to all sounds, images, icons, text, software, logos, expressions, and ideas, is copyrighted and protected by U.S. and worldwide copyright laws and treaty provisions. In addition, the Website’s content is protected by patent and trademark laws, the laws of privacy and publicity, and the various communication regulations and statutes. You must not use such marks without the prior written permission of Company. Any commercial use of this Website or its content is prohibited. You may print a copy of the information contained on the Website only for your personal use. This right may be revoked at any time.`}
            </p>
            <p>
                {`Nothing contained on the Website should be understood as granting you a license to use any of the trademarks, service marks, or logos owned by Company or by any third party.`}
            </p>
            <h2>{`Copyright Infringement`}</h2>
            <p>
                {`Company has in place certain legally mandated procedures regarding allegations of copyright infringement occurring on the Website. Company has adopted a policy that provides for the immediate suspension and/or termination of any user who is found to have infringed on the rights of Company or of a third party, or otherwise violated any intellectual property laws or regulations. Company’ policy is to investigate any allegations of copyright infringement brought to its attention. If you have evidence, know, or have a good faith belief that your rights or the rights of a third party have been violated and you want Company to delete, edit, or disable the material in question, you must provide Company with all of the following information: (a) a physical or electronic signature of a person authorized to act on behalf of the owner of the exclusive right that is allegedly infringed; (b) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works; (c) identification of the material that is claimed to be infringed or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Company to locate the material; (d) information reasonably sufficient to permit Company to contact you, such as an address, telephone number, and if available, an electronic mail address at which you may be contacted; (e) a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (f) a statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. For this notification to be effective, you must provide it to Company’s designated agent at:`}
            </p>
            <p>
                {`Rich Senitte, Owner`}<br/>
                {`Debt Advisors of America`}<br/>
                {`7565 Mission Valley RD Ste 120 San Diego CA 92108`}<br/>
                <a href={`mailto:${email}`}>{email}</a>
            </p>
            <h2>{`Changes to the Website`}</h2>
            <p>
                {`We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.`}
            </p>
            <h2>{`Prohibited Uses`}</h2>
            <p>
                {`Company imposes certain restrictions on your permissible use of the Website. You are prohibited from violating or attempting to violate any security features of the Website, including, without limitation, (a) accessing content or data not intended for you, or logging onto a server or account that you are not authorized to access; (b) attempting to probe, scan, or test the vulnerability of the Website, or any associated system or network, or to breach security or authentication measures without proper authorization; (c) interfering or attempting to interfere with service to any user, host, or network, including, without limitation, by means of submitting a virus to the Website, overloading, “flooding,” “spamming,” “mail bombing,” or “crashing;” (d) using the Website to send unsolicited e-mail, including, without limitation, promotions, or advertisements for products or services; (e) forging any TCP/IP packet header or any part of the header information in any e-mail or in any posting using the Service; or (f) attempting to modify, reverse-engineer, decompile, disassemble, or otherwise reduce or attempt to reduce to a human-perceivable form any of the source code used by Company in providing the Website.`}
            </p>
            <p>
                {`You agree not to upload, download, display, perform, transmit, or otherwise distribute any Content that (a) is libelous, defamatory, obscene, pornographic, abusive, or threatening; (b) advocates or encourages conduct that could constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national, or foreign law or regulation; or (c) advertises or otherwise solicits funds or is a solicitation for goods or services. Company reserves the right to delete any such material from its servers. Company intends to cooperate fully with any law enforcement officials or agencies in the investigation of any violation of these Terms of Use or of any applicable laws.`}
            </p>
            <h2>{`Alleged Violations`}</h2>
            <p>
                {`You understand and agree that we will determine your compliance with these Terms of Use in our sole discretion. To ensure that Company provides a high-quality experience for you and for other users of the Website, you agree that Company or its representatives may access your account and records on a case-by-case basis to investigate complaints or allegations of abuse, infringement of third party rights, or other unauthorized uses of the Website. Company does not intend to disclose the existence or occurrence of such an investigation unless required by law, but Company reserves the right to terminate your account or your access to the Website, with or without notice to you, and without liability to you, if Company believes that you have violated any of the Terms of Use, furnished Company with false or misleading information, or interfered with use of the Website by others.`}
            </p>
            <p>
                {`You agree that any violation by you of these Terms of Use will constitute an unlawful and unfair business practice, and will cause irreparable harm to Company for which monetary damages would be inadequate, and you consent to Company obtaining any injunctive or equitable relief that it deems necessary or appropriate in such circumstances. These remedies are in addition to any other remedies Company may have at law or in equity.`}
            </p>
            <p>
                {`If Company does take any legal action against you as a result of your violation of these Terms of Use, Company will be entitled to recover from you, and you agree to pay, all reasonable attorneys’ fees and costs of such action, in addition to any other relief granted to Company.`}
            </p>
            <h2>{`Accessing the Website`}</h2>
            <p>
                {`You agree and acknowledge that you have the sole responsibility and liability for your use of the Website and for providing or obtaining, and for maintaining, all of the hardware, software, electrical power, telecommunications, Internet services, and other products or services necessary or desirable for you to access and use the Website.`}
            </p>
            <p>
                {`From time to time, due to the performance of maintenance, malfunctions or failures of software, equipment, or telecommunications devices, unusual transaction volume, or similar reasons, the Website may not be available for your use. We minimize the periods of time during which Website is unavailable. You agree that we shall not be responsible for any loss, damages, costs, or expenses which you may suffer or incur, directly or indirectly, as a result of the unavailability of the Website, regardless of whether it could be shown that we could have prevented or reduced the duration of such unavailability by taking any action within our reasonable control. We shall also not be responsible for any loss, damages, costs, or expenses which you may suffer or incur, directly or indirectly, as a result of your inability to access the Website caused directly or indirectly, in whole or in part, by your computer or mobile device, your inability to establish a connection to the Internet, your Internet Service Provider (“ISP”), or capacity or other limitations or constraints of the Internet.`}
            </p>
            <p>
                {`To protect the security of your information, we may require you to authenticate your identity (i.e., prove that you are who you say you are) to conduct certain transactions on the Website. It is a good idea to protect your security by always closing your web browser after leaving the Website. If you believe that information that you have submitted through the Website has been used without your permission, you must tell us immediately. Telephoning us is the best way of keeping your possible losses to a minimum. E-mail us at `}
                <a href={`mailto:${email}`}>{email}</a>
                {` to report unauthorized access. If you fail to notify us, you may be liable for all unauthorized activity on your account. You can also contact us at `}
                <a href={`mailto:${email}`}>{email}</a>
                {` regarding technical issues with the Website.`}
            </p>
            <h2>{`SMS Consent`}</h2>
            <p>
                {`Providing your telephone contact information to us means you have consented in writing to receive SMS communications (text messages) from us. When consenting to messaging notifications, you authorize Company, our assigns, successors or servicing agents to send SMS Notifications (as defined below) to any phone number provided to us, our assigns, successors or service agents in connection with your account. As used in this text messaging disclosure, “SMS Account Notifications” means any SMS (text message) communications from us to you pertaining to your account sent to the phone number provided by you to the Company.`}
            </p>
            <h2>{`How to Unsubscribe`}</h2>
            <p>
                {`You may withdraw your consent to receive SMS Account Notifications by replying with “stop, end, cancel, unsubscribe, or quit” or by emailing us at `}
                <a href={`mailto:${email}`}>{email}</a>
                {` at any time. We may treat your provision of an invalid mobile phone number, or the subsequent malfunction of a previously valid mobile phone number, as a withdrawal of your consent to receive SMS Account Notifications. Any withdrawal of your consent to use SMS Account Notifications will be effective only after we have a reasonable period of time to process your withdrawal. To request additional information, contact us by email at `}
                <a href={`mailto:${email}`}>{email}</a>
                {`. In order to access, view, and retain SMS Account Notifications that we make available to you, you must have: (i) a SMS-capable mobile phone, (ii) an active mobile phone account with a communication service provider; and (iii) sufficient storage capacity on your mobile phone.`}
            </p>
            <p>
                {`All SMS Account Notifications in electronic format from us to you will be considered “in writing.” There is no service fee for SMS Account Notifications but you are responsible for any and all charges, including but not limited to fees associated with text messaging, imposed by your communications service provider. Please consult your mobile service carrier’s pricing plan to determine the charges for sending and receiving text messages. These charges will appear on your phone bill. Message frequency depends on account status or settings. We may modify or terminate our text messaging services from time to time, for any reason, and without notice, including the right to terminate text messaging with or without notice, without liability to you.`}
            </p>
            <h2>{`Third-Party Sites`}</h2>
            <p>
                {`Company has no control over, and no liability for any third-party websites or materials. Website may contain links to third-party websites, such as social media websites, or to partner and affiliate companies, which we do not own or control, but which are provided for your convenience. Because neither Company nor the Website has control over the content and performance of these sites, Company makes no guarantees about the accuracy, currency, content, or quality of the information provided by such sites, and Company assumes no responsibility for unintended, objectionable, inaccurate, misleading, or unlawful content that may reside on those sites. Similarly, from time to time in connection with your use of the Website, you may have access to content items (including, but not limited to, websites) that are owned by third parties. You acknowledge and agree that Company makes no guarantees about, and assumes no responsibility for, the accuracy, currency, content, or quality of this third-party content.`}
            </p>
            <h2>{`No Warranties`}</h2>
            <p>
                {`COMPANY HEREBY DISCLAIMS ALL WARRANTIES. COMPANY IS MAKING THE WEBSITE AVAILABLE “AS IS” WITHOUT WARRANTY OF ANY KIND. YOU ASSUME THE RISK OF ANY AND ALL DAMAGE OR LOSS FROM USE OF, OR INABILITY TO USE, THE WEBSITE OR THE SERVICE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE WEBSITE, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. COMPANY DOES NOT WARRANT THAT THE WEBSITE OR THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE WEBSITE OR THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE. ALTHOUGH WE TRY TO PROVIDE ACCURATE AND TIMELY INFORMATION ON THIS WEBSITE, THERE MAY BE INADVERTENT, TECHNICAL, OR FACTUAL INACCURACIES AND TYPOGRAPHICAL ERRORS. FOR THESE REASONS WE CANNOT WARRANT THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THE INFORMATION, TEXT, GRAPHICS, LINKS, OR OTHER ITEMS ON THIS WEBSITE.`}
            </p>
            <h2>{`Limited Liability`}</h2>
            <p>
                {`COMPANY’S LIABILITY TO YOU IS LIMITED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY BE LIABLE FOR DAMAGES OF ANY KIND (INCLUDING, BUT NOT LIMITED TO, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR LOST DATA, REGARDLESS OF THE FORESEEABILITY OF THOSE DAMAGES) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITE OR ANY OTHER MATERIALS OR SERVICES PROVIDED TO YOU BY COMPANY OR FROM YOUR USE OF, OR INABILITY TO USE, THIS WEBSITE OR ANY INFORMATION PROVIDED ON THIS WEBSITE; OR IN CONNECTION WITH ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS OR LINE OR SYSTEM FAILURE; OR DISCLOSURE OF INFORMATION WHEN REPLYING TO YOU BY E-MAIL OR OTHER ELECTRONIC MEANS OR RECEIVING E-MAILS FROM YOU; EVEN IF WE ARE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LOSSES, OR EXPENSES. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action.`.toUpperCase()}
            </p>
            <p>
                {`WE ASSUME NO RESPONSIBILITY, AND SHALL NOT BE LIABLE FOR, ANY VIRUSES THAT MAY INFECT OR DAMAGE YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY AS A RESULT OF YOUR ACCESS TO, USE OF, OR BROWSING OF THIS WEBSITE, THE WEB, OR YOUR DOWNLOADING OF ANY MATERIALS, DATA, TEXT, IMAGES, OR MEDIA FROM THIS WEBSITE OR THE WEB.`}
            </p>
            <p>
                {`WE DO NOT WARRANT OR REPRESENT THAT YOUR USE OF MATERIALS DISPLAYED ON THIS WEBSITE WILL NOT INFRINGE RIGHTS OF THIRD PARTIES NOT OWNED OR AFFILIATED WITH US.`}
            </p>
            <h2>{`Indemnity`}</h2>
            <p>
                {`You agree to indemnify Company for certain of your acts and omissions. You agree to indemnify, defend, and hold harmless Company, its affiliates, officers, directors, employees, consultants, agents, and representatives from any and all third party claims, losses, liability, damages, and/or costs (including reasonable attorney fees and costs) arising from your access to or use of the Website, your violation of these Terms of Use, or your infringement, or infringement by any other user of your account, of any intellectual property or other right of any person or entity. Company will notify you promptly of any such claim, loss, liability, or demand, and will provide you with reasonable assistance, at your expense, in defending any such claim, loss, liability, damage, or cost. You further agree that you will cooperate fully in the defense of any such claims. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you shall not in any event settle any such claim or matter without our written consent.`}
            </p>
            <h2>{`Other Terms & Conditions`}</h2>
            <h2>{`Governing Law`}</h2>
            <p>
                {`These Terms of Use shall be construed in accordance with and governed by the laws of the United States and the State of California, without reference to their rules regarding conflicts of law. You hereby irrevocably consent to the exclusive jurisdiction of the state or federal courts in San Diego County, California, USA in all disputes arising out of or related to the use of the Website.`}
            </p>
            <h2>{`Severability; Waiver`}</h2>
            <p>
                {`If, for whatever reason, a court of competent jurisdiction finds any term or condition in these Terms of Use to be unenforceable, all other terms and conditions will remain unaffected and in full force and effect. No waiver of any breach of any provision of these Terms of Use shall constitute a waiver of any prior, concurrent, or subsequent breach of the same or any other provisions hereof, and no waiver shall be effective unless made in writing and signed by an authorized representative of the waiving party.`}
            </p>
            <h2>{`Modifications`}</h2>
            <p>
                {`Company may, in its sole discretion and without prior notice, (a) revise these Terms of Use; (b) modify the Website and/or the services provided by Company; and (c) discontinue the Website and/or Company’s services at any time. Company shall post any revision to these Terms of Use to the Website, and the revision shall be effective immediately on such posting. You can review the most current version of the Terms of Use at any time on the Website. You agree to review these Terms of Use and other online policies posted on the Website periodically to be aware of any revisions. You agree that, by continuing to use or access the Website following any revision, you shall abide by any such revision.`}
            </p>
            <h2>{`Miscellaneous`}</h2>
            <p>
                {`You may not assign, convey, subcontract or delegate your rights, duties or obligations hereunder. Unless otherwise stated, any other rules, restrictions, guidelines and terms and conditions that may be posted or made available in connection with a particular feature on the Website are incorporated by this reference into these Terms of Use. Your use of the Website is independent of Company and not as an employee, agent or partner with Company for any purpose. You agree that your use of the Website will not create any joint venture, partnership, employment or agency relationship between you and Company.`}
            </p>
            <p>
                {`Last Updated: June 2021`}
            </p>
        </section>
    );
}
