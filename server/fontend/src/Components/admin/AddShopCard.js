import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import css from './admin.css'
import { BaseURL } from '../Url/BaseURL'
import axios from 'axios'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #3f51b5',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
    form: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #3f51b5',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
    sizeeee: {
        fontSize: 300
    },

    marginnn: {
        marginLeft: 550,
        marginTop: 200,
    },
    input: {
        width: "100%",
        height: "25px",
        border: "none",
        backgroundColor: "#3f51b5",
        opacity: 0.9,
        color: "#ffffff",
        paddingLeft: "15px",
        marginBottom: "10px"
    },
    textArea: {
        width: "100%",
        height: "25px",
        border: "none",
        backgroundColor: "#3f51b5",
        opacity: 0.9,
        color: "#ffffff",
        paddingLeft: "15px",
        marginBottom: "10px",
        overflow: "hidden",
        border: '1px solid gray',
        borderRadius: "5px",
        height: '60px',
    },
    color: {
        color: "#3f51b5",
    },
    radio: {
        '&$checked': {
            color: '#3f51b5'
        }
    },
    checked: {}

}));

export default function AddShopCard() {


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    // console.log(value)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function CratUpload(event) {
        event.preventDefault()

        var price = document.getElementById('price').value
        var title = document.getElementById('title').value
        var description = document.getElementById('description').value
        var fileInput = document.getElementById('raised-button-file')

        // console.log(price)
        // console.log(title)
        // console.log(description)
        // console.log(Availablty)

        let formData = new FormData();
        formData.append("myFile", fileInput.files[0]);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("avalablity", value);

        axios({
            method: 'post',
            url: BaseURL + "/uploadcart",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
            .then(response => {
                // console.log("response data=> ", response.data);
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <>
            <Button className={classes.marginnn} style={{ color: '#3f51b5' }}><AddShoppingCartIcon className={classes.sizeeee} onClick={handleOpen} /></Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.form}>
                        <h2 id="transition-modal-title" className={classes.color}>Cart Form</h2>
                        <p id="transition-modal-description" className={classes.color}>Read careFully before Upload Cart</p>
                        <form onSubmit={CratUpload} style={{ padding: '10px 30px 10px 10px' }} className={classes.paper}>
                            <input className={classes.input} type='text' id="title" placeholder="Title" /><br />
                            <input className={classes.input} type='text' id="price" placeholder="Price" /><br />
                            <textarea
                                className={classes.textArea}
                                id="description"
                                rowsMax={4}
                                aria-label="maximum height"
                                placeholder="Type a short Description about cart"
                            />
                            <br />
                            <FormControl component="fieldset" className={classes.color}>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="Available" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Available" />
                                    <FormControlLabel value="UnAvailable Now" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Un Available" />
                                </RadioGroup>
                            </FormControl><br />
                            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
                            <label className={classes.button} htmlFor="raised-button-file" className={classes.color}>
                                Upload Image
                                {/* <Button variant="raised" component="span" className={classes.button}>  Upload image </Button> */}
                            </label>
                            <Button variant="raised" type="submit" className={classes.color}>  Upload Cart </Button>
                        </form>
                    </div>

                </Fade>
            </Modal>
        </>
    )
}
