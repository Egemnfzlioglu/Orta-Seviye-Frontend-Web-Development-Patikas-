import React from 'react'

function Content({handleDelete, note}) {
  return (
    <>
        <div className="col-xl-3 col-lg-4 col-md-6  " key={note.id}>
              <div className={`card ${note.color}`}>
                <div
                  className={`card-header sticky-top  ${note.color}`}
                >
                  {" "}
                  {/* Silme İşlemi Başı*/}
                  <div className="trash">
                    {note.date}

                    <span
                      className="trash9"
                      onClick={() => handleDelete(note.id, note.content)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </span>
                  </div>
                  {/* Silme İşlemi Sonu*/}
                </div>
                <div className="card-body">
                  <p className="card-text" style={{ fontSize: "1.1rem" }}>
                    {note.content}
                  </p>
                </div>
              </div>
            </div>
    </>
  )
}

export default Content
