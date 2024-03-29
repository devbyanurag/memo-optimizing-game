import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import img240 from '../../assets/240.jpg'
import img720 from '../../assets/720.jpg'

import img4k1 from '../../assets/4k1.jpg'
import img4k2 from '../../assets/4k_2.jpg'



import styles from './Testing.module.css'
const Testing = () => {

    const [pixels, setPixels] = useState<string>('240')

    const handleChangeType = (value: string) => {
        setPixels(value);
    };

    const [selectedImage, setSelectedImage] = useState(img240)
    useEffect(() => {
        if (pixels === '240') {
            setSelectedImage(img240)
        } else if (pixels === '720') {
            setSelectedImage(img720)
        } else if (pixels === '4K') {
            const randomImage = Math.random() < 0.5 ? img4k1 : img4k2;
            setSelectedImage(randomImage);
        }


    }, [pixels])


    return (
        <div className={styles.container}>
            <Box>
                <FormControl fullWidth>
                    <Select
                        style={{ width: '200px' , height: "40px"}}
                        value={pixels}
                        onChange={(e) => { handleChangeType(e.target.value) }}
                    >
                        <MenuItem value={"240"}>240</MenuItem>
                        <MenuItem value={"720"}>720</MenuItem>
                        <MenuItem value={"4K"}>4K</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <img src={selectedImage} alt="moon" className={styles.image_size} />
        </div>
    )
}

export default Testing