import NotesContext from "../context/notes-context";

const withNotesService = () => (Wrapped) => {
    return (props) => {
        return (
            <NotesContext.Consumer>
                {
                    (NotesService) => {
                        return <Wrapped {...props} NotesService={NotesService} />
                    }
                }
            </NotesContext.Consumer>
        )
    }
};

export default withNotesService;