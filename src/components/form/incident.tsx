import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import React from 'react'

//Components
import Modal from '../UI/organisms/modal'
import Mapbox from '../mapbox/mapbox'

//Redux
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import { MARKER_TYPE } from "../../store/MarkerReducer";

//Styles
import './incident.css'

const select = {
  margin: "8px 0",
  width: "22.2%",
  padding: "14px 20px",
  borderRadius: "4px",
  backgroundColor: "#f1f1f1",
  border: "1px solid #ccc"
};

const input = {
  margin: "8px 0",
  width: "20%",
  padding: "14px 20px",
  borderRadius: "4px",
  resize: "none",
} as React.CSSProperties

const button = {
  width: "22.2%",
  backgroundColor: "#2c3e50",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  padding: "14px 20px",
  color: "white",
}

const coordInp = {
  margin: "8px 0",
  width: "8.8%",
  padding: "14px 20px",
  borderRadius: "4px",
  resize: "none",
} as React.CSSProperties

const p = {
  margin: "auto",
  width: "10%",
  backgroundColor: "#2c3e50",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  padding: "10px 10px",
  color: "white",
}

const div = {
  width: "100%",
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  padding: "20px",
}

interface IFormInput {
  kind: string;
  description: string;
  telephone: number;
  lat: number,
  lng: number,
}



export default function Incident() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const latlng = useSelector((state: AppState) => state.coord)
  const marker = useSelector((state: AppState) => state.marker)
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log("DATA", data, latlng?.lat, latlng?.lng)
    dispatch({
      type: MARKER_TYPE,
      payload: {
        lat: latlng?.lat,
        lng: latlng?.lng,
        kind: data.kind,
        description: data.description,
        telephone: data.telephone
      }
    })
    setMessage(`Thank you for your notification!`)

  }
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState<boolean>(false);




  return (
    <div className="App" style={div}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select style={select} {...register("kind", {
            required: "This is required",
          })}  >
            <option value="">-- pick --</option>
            <option value="Accident"> Accident</option>
          </select>
          {errors?.kind && <p className="error">{errors.kind.message}</p>}
        </div>
        <div>
          <textarea placeholder="Description" style={input} {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 500,
              message: "Max length is 500"
            },
          })}
          />
          {errors?.description && <p className="error">{errors.description.message}</p>}
        </div>
        <div>
          <input style={input} placeholder="Phone" {...register("telephone", {
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid number"
            },
            required: "Phone number is required",
            maxLength: {
              value: 9,
              message: "Max length is 9"
            },
            minLength: {
              value: 7,
              message: "Min length is 7"
            }
          })}
          />
          {errors?.telephone && <p className="error">{errors.telephone.message}</p>}
        </div>
        <div>
          <p style={p} onClick={() => setOpen(true)}> Get from map</p>
          {<Modal open={open} setOpen={setOpen} Comp={Mapbox} />}
          <p>
            <input placeholder="Latitude" style={coordInp} value={latlng?.lat} {...register("lat", {
              required: "Latitude is required",
            })}
            />
            
            <input placeholder="Longtitude" style={coordInp} value={latlng?.lng} {...register("lng", {
              required: "Longtitude is required",
              
            })}
            />
            {errors?.lat && <p className="error">{errors.lat.message}</p>}
            {errors?.lng && <p className="error">{errors.lng.message}</p>}
          </p>

        </div>
        <div>
          <input style={button} type="submit" value='Send' />

        </div>
        <div>
          <h1>
            {message}
          </h1>
        </div>
        {/*<DropzoneForm test={onSubmit}/>*/}
      </form >
    </div >
  );
}


