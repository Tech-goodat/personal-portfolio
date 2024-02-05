import {useParams} from 'react-router-dom'

function ContentSection() {
    const{section}=useParams();
  return (
    <div>
        {section==='section1' &&<h1>section1</h1>}
    </div>
  )
}

export default ContentSection