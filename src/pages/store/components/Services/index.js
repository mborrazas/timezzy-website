import React, { useState, useContext } from 'react';
import Service from './service';
import { BookingContext } from '../../../../context/bookingContext';


require('./styles.css')


const Services = () => {

  const { setServicesSelected, setShowPopupBook } = useContext(BookingContext);

  const [findService, setFindService] = useState('');
  const [servicesCollection, setServicesCollection] = useState([
    {
      category: "Servicios más populares", services:
        [{ time: 20, price: 38.00, title: "Speciality Haircut (Skin fades, blow out, Mohawk)", description: "In 30 minutes time you'll get a specility haircut" },
        { time: 45, price: 44.00, title: "Re-Installation & Cleaning", description: "In 30 minutes time you'll get a specility haircut" }]
    },
    {
      category: "Extras", services:
        [{ time: 20, price: 38.00, title: "corte mati Haircut (Skin fades, blow out, Mohawk)", description: "In 30 minutes time you'll get a specility haircut" },
        { time: 45, price: 44.00, title: "corte tlaloc & Cleaning", description: "In 30 minutes time you'll get a specility haircut" }]
    }
  ]);

  const [servicesToRender, setServicesToRender] = useState(servicesCollection);

  const searchServices = (e) => {
    if (e.target.value !== '') {
      setFindService(e.target.value);

      const categoryCollectionToSave = [];
      let servicesCollectionToSave = [];

      servicesCollection.map((category) => {
        servicesCollectionToSave = [];
        category.services.map((service) => {
          if (service.title.toLowerCase().search(findService.toLowerCase()) !== -1) {
            servicesCollectionToSave.push(service);
          }
        })
        categoryCollectionToSave.push({ category: category.category, services: servicesCollectionToSave });
      })
      setServicesToRender(categoryCollectionToSave);
    } else {
      setServicesToRender(servicesCollection);
      setFindService('');
    }
  }

  const setService = (service) => {
    setServicesSelected(services => [...services, service]);
    setShowPopupBook(true);
  }

  return (
    <div className="services">
      <div className='serviceContainerHeader'>
        <h2 className='titleServices'>Servicios</h2>

        <input type="text" className='findService' value={findService} onChange={(e) => { searchServices(e) }} placeholder='Buscar servicios' />

      </div>
      {servicesToRender.map((serviceCollection) => (
        <div>
          <h2 className='categoryService'>{serviceCollection.category}</h2>
          {serviceCollection.services.map((service) => (
            <Service onClick={() => { setService(service) }} title={service.title} price={service.price} time={service.time} description={service.description} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Services;

