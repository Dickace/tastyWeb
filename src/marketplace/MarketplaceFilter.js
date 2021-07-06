import React, {useState} from 'react'
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";


const useStyles = makeStyles({
    label:{
        fontSize: "12pt",

        backgroundColor: "#444444",
        color: "whitesmoke",
    },
    root:{

        color: "black"
    },
    selected:{

        color: "black"
    }

})

function MarketplaceFilter(){
    const classes = useStyles();
    const [streamers,] = useState([
        {streamerName:'Me'},
        {streamerName:'NotMe'},
        {streamerName:'DefinitelyNotMe'},
    ])
    const [categories,] = useState([
        {categoryName:'Art'},

        {categoryName:'Gaming'},
    ])
    const [, setCategory] = useState("All")
    const [, setStreamer] = useState(streamers[0])
    const [, setSort] = useState("Cheaper")
    return(
        <div className="Marketplace_Filter">
            <div className="Marketplace_Filter_ParamBox">
                <FormControl className="Marketplace_Filter_Parameter Marketplace_Filter_Parameter_Streamer">

                    <InputLabel classes={{
                        root: classes.label
                    }}  id="streamerLabel">Streamer</InputLabel>
                    <Select labelId="streamerLabel"

                        className="Marketplace_Filter_Parameter_Selector"
                        onChange={event => {
                            setStreamer(event.target.value)
                        }}
                        defaultValue={''}
                            inputProps={{MenuProps: {disableScrollLock: true}}}

                    >

                        {streamers.map((value, index) => {
                            return(
                                <MenuItem classes={{
                                    
                                    root: classes.root,
                                    selected: classes.selected,


                                }} key={index} value={value.streamerName}>{value.streamerName}</MenuItem>
                            )

                        })}
                    </Select>

                </FormControl>
                <FormControl className="Marketplace_Filter_Parameter Marketplace_Filter_Parameter_Category">

                    <InputLabel classes={{
                        root: classes.label
                    }}  id="streamerLabel"> Type</InputLabel>
                    <Select labelId="streamerLabel"
                            inputProps={{MenuProps: {disableScrollLock: true}}}
                            className="Marketplace_Filter_Parameter_Selector"
                            onChange={event => {
                                setCategory(event.target.value)
                            }}
                            defaultValue={'all'}

                    >
                        <MenuItem value="all">All</MenuItem>

                        {categories.map((value, index) => {
                            return(

                                <MenuItem classes={{

                                    root: classes.root,
                                    selected: classes.selected,


                                }} key={index} value={value.categoryName}>{value.categoryName}</MenuItem>
                            )

                        })}
                    </Select>

                </FormControl>

            </div>
            <div className="Marketplace_Filter_Sort">
                <FormControl className="Marketplace_Filter_Parameter Marketplace_Filter_Parameter_Price">
                    <InputLabel classes={{
                        root: classes.label
                    }}
                                className="Marketplace_Filter_Parameter_Title">
                        Price
                    </InputLabel>

                        <Select
                            inputProps={{MenuProps: {disableScrollLock: true}}}
                            className="Marketplace_Filter_Parameter_Selector"
                            onChange={event => {
                            setSort(event.target.value)
                        }} >
                            <MenuItem value="Cheaper">More cheaper</MenuItem>
                            <MenuItem value="Expensive">More expensive</MenuItem>
                        </Select>


                </FormControl>

            </div>
        </div>
    )
}
export default MarketplaceFilter