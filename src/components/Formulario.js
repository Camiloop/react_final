import { useForm } from "react-hook-form";
import './Formulario.css'

const Formulario = () => {

  const { register, handleSubmit, formState: { errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div>
        <h1 className="title">Let's start a project together!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name..." {...register('name', {
              required: true,
              maxLength: 20,
            })} />
          </div>
          {errors.name?.type === 'required' && <p>This field is required to receive my message :c</p>}
          {errors.name?.type === 'maxLength' && <p>This field must be less than 20 characters</p>}
          <div>
            <label>Email</label>
            <input type="text" placeholder="Your Email..." {...register('email', {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })} />
            
          </div>
          {errors.email?.type === 'pattern' && <p>This should have a valid Email.</p>}
          <div>
            <label>Message</label>
            <textarea type="text" placeholder="Write me a message..." className="form-container__message" cols='30' rows='5' {...register('message')}></textarea>
          </div>
          <input type='submit' value='Submit' className="form-container__submit"/>
        </form>
      </div>
    </div>
  );
};

export default Formulario;