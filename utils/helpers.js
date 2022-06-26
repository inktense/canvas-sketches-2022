import { collorPalletes } from "../common/colors"
import { sample } from 'lodash'

export const getColorPalette = () => {
    const colorsPallete = sample(collorPalletes)

    return colorsPallete
}
