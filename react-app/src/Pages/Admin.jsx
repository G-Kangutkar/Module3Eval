import { useCallback, useState } from "react";

function Admin() {

    const [formData, setFormData] = useState({

        restaurantID: Date.now(),
        restaurantName: "",
        address: "",
        type: "",
        parkingLot: 'Parking',
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });

    const handleFormInput = useCallback((e)=>{
        e.preventDefault();
        const newData = {
        restaurantID: Date.now(),
        restaurantName: formData.restaurantName,
        address: formData.address,
        type: formData.type,
        parkingLot: formData.parkingLot,
        image: formData.image
        }
        localStorage.setItem('evalData',newData);
        setFormData({restaurantID: Date.now(),
        restaurantName: "",
        address: "",
        type: "",
        parkingLot: "Parking",
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"})

    },[formData]);

    const handleInput = useCallback((e)=>{
        const {name,value}=e.target;
        setFormData(prev=>({
            ...prev, [name]:value
        }))
    },[]);

    return(
        <div style={{padding:'20px',margin:'10px', display:'flex'}}>
            <div>
                <form onSubmit={handleFormInput}>
                    <input style={{padding:'10px',margin:'5px'}} type="text" name="restaurantName" value={formData.restaurantName} placeholder="restaurantName" onChange={handleInput} /> <br />
                    <input style={{padding:'10px',margin:'5px'}} type="text" name="address" value={formData.address} placeholder="address" onChange={handleInput} /> <br />
                    <select style={{padding:'10px',margin:'5px'}} name="type" value={formData.type} onChange={handleInput}>
                        <option value="Rajasthani">Rajasthani</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Mughlai">Mughlai</option>
                        <option value="Jain">Jain</option>
                        <option value="Thai">Thai</option>
                        <option value="North Indian">North Indian</option>
                        <option value="South Indian">South Indian</option>
                    </select> <br />
                    <select style={{padding:'10px',margin:'5px'}} name="parkingLot" value={formData.parkingLot}>
                        <option value="Parking">Paking</option>
                        <option value="No-Parking">No-Parking</option>
                    </select><br />

                    <input style={{padding:'10px',margin:'5px'}} type="text" name="image" value={formData.image} placeholder="image" onChange={handleInput} /> <br />
                    <button style={{padding:'10px',margin:'5px'}} type="submit">Add</button>
                </form>

            </div>
            <div>

            </div>
        </div>
    )
}
export default Admin;