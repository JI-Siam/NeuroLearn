'use client'
import { authClient } from "@/lib/auth-client"

const UpdateCard = () => {
        const { data: session } = authClient.useSession() ; 
        const user = session?.user ;
    return (
            <div>
               <div className=" my-40 flex justify-center items-center">
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Update Info</legend>

                        <label className="label">Name</label>
                        <input type="text" className="input input-primary" placeholder={user?.name} />

                        <label className="label">Image Url</label>
                        <input type="text" className="input input-primary" placeholder={user?.image} />

                         <button className="btn btn-primary">Save</button>
                </fieldset>
                
               </div>
        </div>
    );
};

export default UpdateCard;