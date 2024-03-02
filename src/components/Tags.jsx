import './../style/tags.scss'

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => {
        return <span key={tag}>{tag}</span>
      })}
    </div>
  )
}

export default Tags
