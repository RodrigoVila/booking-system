type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactEmail = ({ name, email, subject, message }: ContactEmailProps) => {
  const containerStyle = "bg-gray-100 m-0 p-5 font-sans";
  const cardStyle = "max-w-3xl mx-auto bg-white p-5 rounded-lg shadow-md";
  const sectionHeaderStyle = "text-center pb-5 border-b border-gray-300";
  const sectionContentStyle = "text-gray-600 leading-relaxed";
  const tableCellStyle = "p-2 border-b border-gray-300";

  return (
    <div className={containerStyle}>
      <div className={cardStyle}>
        <header className={sectionHeaderStyle}>
          <h1 className="text-gray-800">New Contact from the Web</h1>
        </header>
        <main className="py-5">
          <p className={sectionContentStyle}>Hey Damian,</p>
          <p className={sectionContentStyle}>
            You have received a new message from the website contact form. Here
            are the details:
          </p>
          <table className="mt-5 w-full border-collapse">
            <thead>
              <tr>
                <th className={`text-left ${tableCellStyle} border-b-2`}>
                  Field
                </th>
                <th className={`text-left ${tableCellStyle} border-b-2`}>
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tableCellStyle}>Name</td>
                <td className={tableCellStyle}>{name}</td>
              </tr>
              <tr>
                <td className={tableCellStyle}>Email</td>
                <td className={tableCellStyle}>{email}</td>
              </tr>
              <tr>
                <td className={tableCellStyle}>Subject</td>
                <td className={tableCellStyle}>{subject}</td>
              </tr>
              <tr>
                <td className={tableCellStyle}>Message</td>
                <td className={tableCellStyle}>{message}</td>
              </tr>
            </tbody>
          </table>
          <p className={`${sectionContentStyle} mt-4`}>
            Please follow up with this contact as soon as possible.
          </p>
          <p className={sectionContentStyle}>Best regards,</p>
          <p className={sectionContentStyle}>The Website Team</p>
        </main>
        <footer className="border-t border-gray-300 pt-5 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactEmail;
