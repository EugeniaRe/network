'use client'

import React, { useState, useMemo } from 'react'
import { data } from '@/data'

import styles from './RoutesTable.module.css'

type SortField = 'address' | 'gateway' | 'interface'
type SortDirection = 'asc' | 'desc'

const RoutesTable = () => {
  const routes = data
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const compareIPs = (ip1: string, ip2: string): number => {
    const parts1 = ip1.split('.').map(Number)
    const parts2 = ip2.split('.').map(Number)

    for (let i = 0; i < 4; i++) {
      if (parts1[i] !== parts2[i]) {
        return parts1[i] - parts2[i]
      }
    }
    return 0
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedRoutes = useMemo(() => {
    if (!sortField) return routes

    const sorted = [...routes].sort((a, b) => {
      let comparison = 0

      if (sortField === 'interface') {
        comparison = a.interface.localeCompare(b.interface)
      } else {
        comparison = compareIPs(a[sortField], b[sortField])
      }

      return sortDirection === 'asc' ? comparison : -comparison
    })

    return sorted
  }, [routes, sortField, sortDirection])

  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) {
      return <span className={styles.sortIndicator}>↕</span>
    }
    return (
      <span className={styles.activeSortIndicator}>
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Действующие маршруты IPv4</h1>

        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.header}>
                <tr>
                  <th className={styles.headerCell}>
                    <button
                      onClick={() => handleSort('address')}
                      className={styles.sortButton}
                    >
                      Адрес назначения
                      {renderSortIndicator('address')}
                    </button>
                  </th>
                  <th className={styles.headerCell}>
                    <button
                      onClick={() => handleSort('gateway')}
                      className={styles.sortButton}
                    >
                      Шлюз
                      {renderSortIndicator('gateway')}
                    </button>
                  </th>
                  <th className={styles.headerCell}>
                    <button
                      onClick={() => handleSort('interface')}
                      className={styles.sortButton}
                    >
                      Интерфейс
                      {renderSortIndicator('interface')}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedRoutes.map((route) => (
                  <tr key={route.uuid} className={styles.row}>
                    <td className={`${styles.cell} ${styles.monoCell}`}>
                      {route.address}
                    </td>
                    <td className={`${styles.cell} ${styles.monoCell}`}>
                      {route.gateway}
                    </td>
                    <td className={styles.cell}>
                      <span>{route.interface}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Нажмите на заголовок столбца для сортировки
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoutesTable
