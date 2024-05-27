function styleBorder(darkMode: boolean) {
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

function labelStyles(darkMode: boolean) {
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

export function textFieldStyles(darkMode: boolean) {
    return {
        "& .MuiOutlinedInput-root": {
            color: `${darkMode ? 'white' : 'black'}`,
            fontFamily: "Arial",
            ...styleBorder(darkMode)
        },
        ...labelStyles(darkMode)
    }
}

export function selectFieldStyles(darkMode: boolean) {
    return {
        "& .MuiSvgIcon-root": {
            color: `${darkMode ? 'white' : 'black'}`,
        },
        ...styleBorder(darkMode),
        ...labelStyles(darkMode)
    }
}