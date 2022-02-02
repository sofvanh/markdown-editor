import React from 'react';
import IconButton from '@mui/material/IconButton';
import FolderOpen from '@mui/icons-material/FolderOpen';
import FileDownload from '@mui/icons-material/FileDownload';
import Print from '@mui/icons-material/Print';
import './Buttons.css';

function Buttons() {
    return (
        <div
            className="buttons">
            <div className="button">
                <input
                    type="file"
                    /*accept="image/*"*/
                    id="upload-file-button"
                    style={{ display: 'none' }} />
                <label htmlFor="upload-file-button">
                    <IconButton
                        aria-label="upload a markdown file"
                        component="span">
                        <FolderOpen />
                    </IconButton>
                </label>
            </div>
            <div className="button">
                <IconButton
                    onClick={() => alert('TODO download as a markdown file')}
                    aria-label="download as as markdown file">
                    <FileDownload />
                </IconButton>
            </div>
            <div className="button">
                <IconButton
                    onClick={() => alert('TODO print')}
                    aria-label="print">
                    <Print />
                </IconButton>
            </div>
        </div>
    )
}

export default Buttons;