import { useState, useEffect } from 'react';

function request(URL, header) {
  return fetch(URL, {
    method: 'GET',
    headers: header,
  });
}


const Message = () => {
  const [statusPLC, setStatusPLC] = useState('');
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      while (true) {
        const url = 'https://169.254.46.42:80/api/get/data?elm=STATE';
        const apikey = '1e82f68d938c0f181533f5cbe9696aa9347c52d367095aac32e269c491e7b362f869736d02a08089';
        const header = {
          'Authorization': `Bearer ${apikey}`
        };

        const response = await request(url, header);
        const jsonData = await response.json();
        const newState = jsonData.SYSINFO.STATE;

        if (newState !== statusPLC) {
          setStatusPLC(newState);
          setNotificaciones([...notificaciones, `El estado cambió a: ${newState}`]);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    fetchData();
  }, [statusPLC, notificaciones]);

  const borrarNotificacion = (index) => {
    const newNotificaciones = [...notificaciones];
    newNotificaciones.splice(index, 1);
    setNotificaciones(newNotificaciones);
  };

  return (
    <div className="m-4">
      <h1>Estado actual del PLC: {statusPLC}</h1>
      <div className="mt-4">
        {notificaciones.map((notificacion, index) => (
          <div key={index} className="bg-gray-200 p-2 my-2 flex justify-between">
            <p>{notificacion}</p>
            <button onClick={() => borrarNotificacion(index)} className="ml-2 text-red-600">
              Borrar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
