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

    
    console.log(service);
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

    const response = await fetch(`${apiUrl}/service`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
    });

    return response.json();
}