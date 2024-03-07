function styleBorder(darkMode) {
    return {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${darkMode ? 'white' : 'black'}`
        },
        "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
                borderWidth: "3px",
            },
        },
        "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor:`${darkMode ? 'white' : 'black'}`,
                borderWidth: "2px",
            },
        },
    }
}

function labelStyles(darkMode) {
    return {
        "& .MuiInputLabel-outlined": {
            color: `${darkMode ? 'white' : 'black'}`,
            "&.Mui-focused": {
                color: 'primary.main',
                fontWeight: "bold",
            },
        }
    }
}

export function textFieldStyles(darkMode) {
    return {
        "& .MuiOutlinedInput-root": {
            color: `${darkMode ? 'white' : 'black'}`,
            fontFamily: "Arial",
            ...styleBorder(darkMode)
        },
        ...labelStyles(darkMode)
    }
}

export function selectFieldStyles(darkMode) {
    return {
        "& .MuiSvgIcon-root": {
            color: `${darkMode ? 'white' : 'black'}`,
        },
        ...styleBorder(darkMode),
        ...labelStyles(darkMode)
    }
}