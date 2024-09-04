import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

interface Title {
    titleString: string
    width: number
}

interface ListProps {
    titles: Title[]
    contents: Array<(string | string[])[]> // 文字列か文字列の配列
}

const List: React.FC<ListProps> = ({ titles, contents }) => {
    const totalWidth = titles.reduce((sum, title) => sum + title.width, 0)

    return (
        <TableContainer component={Paper} className="m-4 mr-8 overflow-x-auto">
            <Table aria-label="project table">
                <TableHead>
                    <TableRow>
                        {titles.map((title, index) => (
                            <TableCell
                                key={index}
                                align="center"
                                className={`border-r  ${index === titles.length - 1 ? '' : 'border-gray-300'}`}
                                style={{ width: `${(title.width / totalWidth) * 100}%` }}
                            >
                                {title.titleString}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contents.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className="border-b border-gray-300">
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    align="center"
                                    className={`border-r ${
                                        cellIndex === titles.length - 1 ? 'border-none' : 'border-gray-300'
                                    }`}
                                    style={{ width: `${(titles[cellIndex].width / totalWidth) * 100}%` }}
                                >
                                    {/* 配列ならjoinで結合し、文字列ならそのまま表示 */}
                                    {Array.isArray(cell) ? cell.join(', ') : cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List
