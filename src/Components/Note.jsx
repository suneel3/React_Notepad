
import DeleteIcon from '@mui/icons-material/Delete';

function Note({deleteNote , id , changeCurrentNote , title}) {
  return (
    <>
     <div className="note" onClick={(e)=>{changeCurrentNote(e,id)}}>
        <p>{title}</p>
        <DeleteIcon onClick={(e)=>{deleteNote(e,id)}}/>
     </div>
    </>
  )
}

export default Note