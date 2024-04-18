import { useState } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function AddtoList() {
    const [listItem, setListItem] = useState([]);
    const [input, setInput] = useState({
        id: "",
        itemValue: ""
    })
    const [editedItemId, setEditedItemId] = useState(null);

    const handleInput = (e) => {
        setInput({
            ...input,
            itemValue: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editedItemId !== null) {
            // If an item is being edited, update its value
            const updatedList = listItem.map(item =>
                item.id === editedItemId ? { ...item, itemValue: input.itemValue } : item
            );
            setListItem(updatedList);
            setEditedItemId(null); // Clear edited item ID
        } else {
            // Otherwise, add a new item
            let newTodo = {
                id: new Date().getTime().toString(),
                itemValue: input.itemValue
            };
            setListItem([...listItem, newTodo]);
        }
        setInput({ id: "", itemValue: "" });
    }

    const handleEdit = (id) => {
        setEditedItemId(id); // Set the ID of the item being edited
        const editedItem = listItem.find(item => item.id === id);
        setInput({ ...input, itemValue: editedItem.itemValue }); // Populate input field with item value
    }

    const handleDelete = (id) => {
        const updatedList = listItem.filter(item => item.id !== id);
        setListItem(updatedList);
    }

    return (
        <div className="app">
            <Typography variant="h2" component="h2" sx={{ m: 1, color: "#e63946" }}>
                List
            </Typography>
            <div className="list-background">
                {
                    listItem.map((item) => {
                        return (
                            <div className="listItems" key={item.id}>
                                <Typography variant="h6" component="h6" sx={{ m: 3, color: "#284b63" }}>
                                    {item.itemValue}
                                </Typography>
                                <IconButton aria-label="edit" size="small" onClick={() => handleEdit(item.id)}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(item.id)} >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </div>
                        )
                    })
                }
            </div>
            <form>
                <TextField id="outlined-basic" label="Enter Input to List" variant="outlined" value={input.itemValue} onChange={handleInput} sx={{ mt: 3 }} />
                <div className="btn">
                    <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3 }} disabled={!input.itemValue}>{editedItemId !== null ? "Save" : "Add"}</Button>
                </div>
            </form>
        </div >
    );
}