import React from 'react';

const User = {
  name: 'FAJAR AHMADI',
  email: 'Fajar.ahmadi@students.amikom.ac.id',
  os: 'Windows 10',
  github: 'github.com/fajar-ahmadi',
  telegram: 'fajrID'
};



const About = () => {
  return (
    <React.Fragment>
        <h1>Halaman About</h1>
          <table >
            <tr>
              <td>Nama Peserta</td>
              <td>{User.name}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>{User.email}</td>
            </tr>

            <tr>
              <td>Sistem Operasi</td>
              <td>{User.os}</td>
            </tr>

            <tr>
              <td>Akun Github</td>
              <td>{User.github}</td>
            </tr>

            <tr>
              <td>Akun Telegram</td>
              <td>{User.telegram}</td>
            </tr>
          </table>
    </React.Fragment>
  )

}

export default About;