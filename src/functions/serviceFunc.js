import { storage } from "@/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import apiUrl from "@/config/apis.config";


const uploadServiceImg = async (image) => {
   
const avatarStorageRef = ref(storage, `services/${self.crypto.randomUUID()}`);
await uploadBytes(avatarStorageRef, image);
return getDownloadURL(avatarStorageRef);
    
}

export const createService = async (service) =>{

    const serviceImageUrl = await uploadServiceImg(service.image);
    service.image = serviceImageUrl;

    const response = await fetch(`${apiUrl}/service`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
    });

    return response.json();

}

export const updateService = async (service) => {
    if (service.image instanceof File) {
        const serviceImageUrl = await uploadServiceImg(service.image);
        service.image = serviceImageUrl;
    }

    console.log(service);

    const response = await fetch(`${apiUrl}/service/${service.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
    });

    return response.json();
}

export const getAllServices =  async () =>{
        const response = await fetch(`${apiUrl}/service`);
        const data = await response.json();
        return data;
}

export const getAllServicesCreatedByUser = async (id_user) => {
    const response = await fetch(`${apiUrl}/service/created/${id_user}`);
    const data = await response.json();
    return data;

}


export const validateService = (service) => {
    // Validar campos requeridos
    if (!service.title) {
      return "El título es requerido";
    }
  
    if (!service.price) {
      return "El precio es requerido";
    }
  
    if (!service.content) {
      return "El contenido es requerido";
    }
  
    if (!service.category) {
      return "La categoría es requerida";
    }
  
    if (!service.image) {
      return "La imagen es requerida";
    }
  
    if (!service.authorCreated) {
      return "El autor es requerido";
    }
  
    // Validar longitud de los campos
    if (service.title.length > 100) {
      return "El título no puede tener más de 100 caracteres";
    }
  
    if (isNaN(service.price) || service.price < 0) {
      return "El precio debe ser un número positivo";
    }
  
    if (service.content.length > 5000) {
      return "El contenido no puede tener más de 5000 caracteres";
    }
  
    if (service.category.length > 50) {
      return "La categoría no puede tener más de 50 caracteres";
    }
  
    return null;
  }