// This will be the object that will contain the Vue attributes
// and be used to initialize it.
let app = {};

// Given an empty app object, initializes it filling its attributes,
// creates a Vue instance, and then initializes the Vue instance.
let init = (app) => {

    // This is the Vue data.
    app.data = {
        addNoteState : false,
        title : '',
        content : '',
        color : '#FFB6C1',
        notes : []
    };

    app.toggleNote = () => {
        app.data.addNoteState = !app.data.addNoteState
    }

    app.submit = () => {
        let title = app.data.title
        let content = app.data.content
        let color = app.data.color
        
        axios.post(add_note_url, {'title' : title, 'content' : content, 'color' : color}).then((response) =>{
            console.log(response.data)
            app.data.title = ''
            app.data.content = ''
            app.data.color = '#FFB6C1'
            app.data.addNoteState = false
        }).catch((error) =>{
            console.log(error)
        })
    }

    // We form the dictionary of all methods, so we can assign them
    // to the Vue app in a single blow.
    app.methods = {
        toggleNote : app.toggleNote,
        submit : app.submit
    };

    // This creates the Vue instance.
    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods
    });

    // And this initializes it.
    app.init = () => {
        axios.get(get_notes_url).then((response) => {
            app.data.notes = response.data.notes
        }).catch((error) => {
            console.log(error)
        })
    };

    // Call to the initializer.
    app.init();
};

// This takes the (empty) app object, and initializes it,
// putting all the code i
init(app);
