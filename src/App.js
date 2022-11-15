import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }


  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='fundo'>
      <div className="container">

        <QRCode className='qrcode'
          value={link}
        />
        <input
          className="input"
          placeholder="Digite o seu link..."
          value={link}
          onChange={(e) => handleQrcode(e)}
        />
        <a className='button' href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>
      </div>
    </div>
  );
}

export default App;
