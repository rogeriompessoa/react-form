
const LabelForm = (props) => {
    return (
        <label htmlFor={props.name.toLowerCase()} className='form -label'>{props.name}</label>
        
)};

export default LabelForm