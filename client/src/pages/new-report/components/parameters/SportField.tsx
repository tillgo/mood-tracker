import EditableField from '../../../../commons/components/fields/EditableField'
import { Intensity, Sport } from '../../../../commons/types/types'
import { parametersConfig } from '../../../../commons/config/parametersConfig'
import { useNewReportDispatch, useNewReportSelector } from '../../newReportContext'
import { Dispatch, SetStateAction } from 'react'
import { Box } from '@mui/material'
import NumberInput from '../../../../commons/components/inputs/NumberInput'
import IntensitySelector from '../../../../commons/components/inputs/IntensitySelector'
import SportRenderer from '../../../../commons/components/fields/renderer/SportRenderer'

const Editor = (value: Sport, onChange: Dispatch<SetStateAction<Sport>>) => {
    const handleChangeDuration = (value: number) => {
        onChange((old) => {
            return { ...old, duration: value }
        })
    }
    const handleChangeIntensity = (value: Intensity) => {
        onChange((old) => {
            return { ...old, intensity: value }
        })
    }
    return (
        <Box display="flex" flexDirection={'column'} sx={{ width: '250px', gap: 1 }}>
            <NumberInput label={'Duration'} value={value.duration} onChange={handleChangeDuration} adornment={'h'} />
            <IntensitySelector value={value.intensity} onChange={handleChangeIntensity} />
        </Box>
    )
}

const SportField = () => {
    const config = parametersConfig.sport
    const { icon, label } = config

    const value = useNewReportSelector((s) => s.parameters.sport)

    const dispatch = useNewReportDispatch()
    const handleSave = (newValue: Sport) => {
        dispatch({ type: 'updateParameter', payload: { field: 'sport', newValue } })
    }

    return (
        <EditableField<Sport>
            label={label}
            value={value}
            onSave={handleSave}
            icon={icon}
            editor={Editor}
            renderer={SportRenderer}
        />
    )
}

export default SportField