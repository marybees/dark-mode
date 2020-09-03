import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(value);

    return [value, setValue];
};

export default useDarkMode