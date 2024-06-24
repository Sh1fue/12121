import React, { useState } from 'react';
import axios from 'axios';

function DetailForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState('');
  const [infoId, setInfoId] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageData = null;
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          imageData = reader.result.split(',')[1];
          sendData(imageData);
        };
        reader.onerror = () => {
          console.error('Ошибка при чтении изображения.');
          setError('Ошибка при чтении изображения.');
        };
      } else {
        sendData(imageData);
      }
    } catch (error) {
      console.error('Ошибка при создании детали:', error);
      setError('Ошибка при создании детали');
    }
  };

  const sendData = async (imageData) => {
    try {
      const dataToSend = {
        name: name,
        price: price,
        img: imageData,
        info_id: infoId 
      };

      const response = await axios.post('https://8ba5-94-141-124-60.ngrok-free.app/api/detail/create', dataToSend);

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Ошибка при создании детали:', error);
      setError('Ошибка при создании детали');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Название:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Цена:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Фото:
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <label>
        Дополнительная информация:
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </label>
      <button type="submit">Создать деталь</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default DetailForm;
