import React from 'react';
import ReactDOM from 'react-dom';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import './filepond.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import './filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files
            files: []
        };
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <div className="App">

                {/* // Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                          allowMultiple={true}
                          maxFiles={5}
                          server="http://localhost:3000/upload"
                          oninit={() => this.handleInit() }
                          onupdatefiles={(fileItems) => {
                              // Set current file objects to this.state
                              this.setState({
                                  files: fileItems.map(fileItem => fileItem.file)
                              });
                          }}>

                    {/* Update current files  */}
                    {this.state.files.map(file => (
                        <File key={file} src={file} origin="local" />
                    ))}

                </FilePond>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));