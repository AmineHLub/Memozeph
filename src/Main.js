function Main () {
    return <div className="app-main">

        <div className ="app-save-button">
        <button><strong>Save</strong></button> 
        </div>
       
        <div className="app-main-note-edit">
            <input type="text" id="Title" autoFocus />
            <textarea id="Body" placeholder="Start writing your notes..." />
       </div>

       
   </div>;

}

export default Main;