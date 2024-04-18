import { useDrawerStatus } from "@react-navigation/drawer"

export const useIsTrue = (value: string | undefined) => {
    if ((typeof value === 'string')) {
        return value?.toLowerCase() === "true"
    }
}
export const useIsDrawerOpen = () => {
    const isDrawerOpen = useDrawerStatus() === 'open'
    return { isDrawerOpen }
} 