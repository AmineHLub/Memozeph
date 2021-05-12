function Main({activeNote}) {
  return (
    <div className="app-main">
      <div className="app-save-button">
        <button onClick={}>
          <strong>Save</strong>
        </button>
      </div>

      <div className="app-main-note-edit">
        <input type="text" id="Title" autoFocus value={activeNote.title} />
        <textarea id="Body" placeholder="Start writing your notes..." />
      </div>
    </div>
  );
}
// git add .gitignore
//////python,flask, mysql (ORM) => SQL ,(NOSQL), RESTFULL API, GET localhost/notes => notes
// POST localhost/notes body {note} => db add note
// PATCH localhost/notes body {note} => modify db note 
// ......
export default Main;
