import { RatingField } from '@shared/types'
import { Box, Tooltip, Typography } from '@mui/material'
import { ratingConfig, RatingFieldConfig } from '../../config/ratingConfig'
import { useDailyReportSelector, useDailyReportDispatch } from '../../context/dailyReportContext'
import ValueSlider from '../inputs/ValueSlider'

const Label = (config: RatingFieldConfig) => (
    <Tooltip title={config.description} placement={'top'}>
        <Box
            sx={{
                cursor: 'default',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: { xs: 0.5, sm: 0.8 },
                mr: 0.5,
            }}
        >
            <config.icon sx={{ color: config.color, fontSize: { xs: 21, sm: 22 } }} />
            <Typography fontSize={{ xs: 15, sm: 16 }}>{config.label}</Typography>
        </Box>
    </Tooltip>
)

const ValueEditor = ({ field }: { field: RatingField }) => {
    const config = ratingConfig[field]
    const value = useDailyReportSelector((s) => s.rating[field])

    const dispatch = useDailyReportDispatch()
    const handleUpdate = (newValue: number) => {
        dispatch({ type: 'updateRatingValue', payload: { field, newValue } })
    }

    return (
        <>
            <Label {...config} />
            <ValueSlider value={value ?? 1} setValue={handleUpdate} tips={config.tips} />
        </>
    )
}

export default ValueEditor
