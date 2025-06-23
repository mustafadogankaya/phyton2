import React, { useState } from 'react';

/**
 * Ana React bileşeni - Kullanıcı Giriş ve Görüntüleme Uygulaması
 * 
 * Bu bileşen aşağıdaki işlevleri sağlar:
 * - Kullanıcıdan metin girişi alma
 * - Girilen verileri ekranda görüntüleme
 * - Girişler listesini temizleme
 * 
 * @returns {JSX.Element} React bileşeni
 */
function App() {
  // Kullanıcı girişi için state (mevcut input değeri)
  const [inputValue, setInputValue] = useState('');
  
  // Girilen verilerin listesi için state
  const [entries, setEntries] = useState([]);

  /**
   * Form gönderim işleyicisi
   * Kullanıcının girdiği veriyi entries listesine ekler
   * 
   * @param {Event} e - Form submit event'i
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Boş giriş kontrolü
    if (inputValue.trim() === '') {
      alert('Lütfen bir değer girin!');
      return;
    }

    // Yeni giriş objesi oluştur (zaman damgası ile)
    const newEntry = {
      id: Date.now(), // Benzersiz ID için timestamp kullan
      text: inputValue.trim(),
      timestamp: new Date().toLocaleString('tr-TR')
    };

    // Entries listesine ekle (en yeni önce olacak şekilde)
    setEntries(prevEntries => [newEntry, ...prevEntries]);
    
    // Input alanını temizle
    setInputValue('');
  };

  /**
   * Input değişiklik işleyicisi
   * 
   * @param {Event} e - Input change event'i
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Tüm girişleri temizleme işleyicisi
   */
  const handleClearAll = () => {
    if (entries.length > 0) {
      const confirmClear = window.confirm('Tüm girişleri temizlemek istediğinizden emin misiniz?');
      if (confirmClear) {
        setEntries([]);
      }
    }
  };

  return (
    <div className="container">
      {/* Başlık bölümü */}
      <header className="header">
        <h1>React Kullanıcı Giriş Uygulaması</h1>
        <p>Bu uygulama kullanıcıdan veri girişi alır ve ekranda görüntüler.</p>
      </header>

      {/* Giriş formu bölümü */}
      <section className="input-section">
        <h2>Veri Girişi</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Buraya bir şeyler yazın..."
            maxLength="500"
          />
          <button 
            type="submit" 
            className="submit-button"
            disabled={inputValue.trim() === ''}
          >
            Ekle
          </button>
          {entries.length > 0 && (
            <button 
              type="button" 
              className="clear-button"
              onClick={handleClearAll}
            >
              Tümünü Temizle
            </button>
          )}
        </form>
      </section>

      {/* Girişleri görüntüleme bölümü */}
      <section className="display-section">
        <h2>Girilen Veriler ({entries.length})</h2>
        
        {entries.length === 0 ? (
          <div className="empty-state">
            Henüz hiç veri girilmedi. Yukarıdaki alana bir şeyler yazıp "Ekle" butonuna basın.
          </div>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="display-item">
              <strong>Giriş:</strong> {entry.text}<br />
              <small style={{ color: '#6c757d' }}>
                <strong>Zaman:</strong> {entry.timestamp}
              </small>
            </div>
          ))
        )}
      </section>

      {/* Footer bilgi bölümü */}
      <footer style={{ 
        marginTop: '2rem', 
        paddingTop: '1rem', 
        borderTop: '1px solid #eee',
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '0.9rem'
      }}>
        <p>
          Bu React bileşeni <strong>phyton2</strong> repository'si için oluşturulmuştur.<br />
          Kullanıcı girişi alıp ekranda görüntüleyen basit bir frontend uygulamasıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;