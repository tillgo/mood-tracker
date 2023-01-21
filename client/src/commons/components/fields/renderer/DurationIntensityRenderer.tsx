import { DurationIntensity } from '../../../types/types'
import { EditableFieldProps } from '../EditableField'
import { RecursivePartial } from '../../../types/util'
import { Box, Chip } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BoltIcon from '@mui/icons-material/Bolt'
import { formatNumber } from '../../../util/formatters'

const DurationIntensityRenderer: EditableFieldProps<RecursivePartial<DurationIntensity>>['renderer'] = (
    value: RecursivePartial<DurationIntensity>
) => {
    return (
        <Box display={'flex'} gap={1}>
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Duration: '}</b>
                        {value.duration ? formatNumber(1, 1)(value.duration) + 'h' : '-'}
                    </>
                }
                icon={<AccessTimeIcon />}
            />
            <Chip
                size={'small'}
                label={
                    <>
                        <b>{'Intensity: '}</b>
                        {value.intensity ?? '-'}
                    </>
                }
                icon={<BoltIcon />}
            />
        </Box>
    )
}

export default DurationIntensityRenderer
