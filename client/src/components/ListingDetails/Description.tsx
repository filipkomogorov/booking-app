interface Descriptionprops {
    description?: string
}

const Description:React.FC<Descriptionprops> = ({description}) => {
  return (
    <div className="mb-sizeLarge">
        <p>{description}</p>
    </div>
  )
}

export default Description