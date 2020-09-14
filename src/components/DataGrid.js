import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
    FilteringState,
} from '@devexpress/dx-react-grid';
import {
    TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';
import { IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';
import { LinearProgress } from '@material-ui/core';
import { debounce } from './../utils/utils';
import {
    SummaryState,
    IntegratedSummary,
} from '@devexpress/dx-react-grid';
import {
    TableSummaryRow,
} from '@devexpress/dx-react-grid-material-ui';
import { VirtualTable } from '@devexpress/dx-react-grid-material-ui';



class DataGrid extends React.Component {

    constructor(props) {
        super(props);
        let df = [];
        this.state = {
            lastQuery: '',
            loading: false,
            rows: props.rows,
            filters: df
        };
        const DEBOUNCE_DELAY = 400;

        this.setLoading = this.setLoading.bind(this);
        this.setLastQuery = this.setLastQuery.bind(this);
        this.setFilters = this.setFilters.bind(this);
        this.setRows = this.setRows.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.setLastQuery = this.setLastQuery.bind(this);
        this.loadData = debounce(this.loadData, DEBOUNCE_DELAY);
    }

    render() {
        let { rows } = this.state;
        let { columns } = this.props;
        let filteringStateColumnExtensions = [{
            columnName: 'id', filteringEnabled: false
        }, {
            columnName: 'cgpa', filteringEnabled: false
        }];
        let totalSummaryItems = [{
            columnName: 'id', type: 'count'
        }];

        return (
            <div className="datagrid">
                <Paper>
                    <Grid
                        rows={rows}
                        columns={columns}>
                        <FilteringState defaultFilters={[]} onFiltersChange={this.setFilters}
                            columnExtensions={filteringStateColumnExtensions} />
                        <SortingState defaultSorting={[{ columnName: 'id', direction: 'asc' }]} />
                        <IntegratedSorting />
                        <SummaryState
                            totalItems={totalSummaryItems}
                        />
                        <IntegratedSummary />
                        <Table />
                        <VirtualTable />
                        <TableHeaderRow showSortingControls />
                        <TableFilterRow />
                        <TableSummaryRow />
                    </Grid>
                    {this.state.loading && <LinearProgress />}
                </Paper>

            </div>
        );
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const queryString = this.getQueryString();
        var { setLastQuery, setLoading, setRows } = this;
        var { lastQuery, loading } = this.state;
        if (queryString !== lastQuery && !loading) {
            setLoading(true);
            fetch(queryString, { method: 'GET' })
                .then(response => {
                    let promise = response.json();
                    return promise;
                })
                .then((records) => {
                    setRows(records);
                    setLoading(false);
                    setLastQuery(queryString);
                })
                .catch((a, b, c) => {
                    setLoading(false)
                });
            setLastQuery(queryString);
        }
    }

    getQueryString() {
        let { filters } = this.state;
        let filter = filters.reduce((acc, { columnName, value }) => {
            let f = {
                columnName, operation: 'contains', value: encodeURIComponent(value)
            };
            acc.push(JSON.stringify(f));
            return acc;
        }, []);

        const URL = this.getURL();
        console.log(`${URL}?filter=[${filter}]`);
        return `${URL}?filter=[${filter}]`;
    };

    setLastQuery(query) {
        this.setState({
            lastQuery: query
        });
    }
    setLoading(loading) {
        this.setState({
            loading
        });
    }
    setRows(rows) {
        this.setState({
            rows
        });
    }
    setFilters(filters) {
        this.setState({
            filters: filters
        });
    }
    getURL() {
        let { serverHostname } = this.props;
        return `http://${serverHostname}/data`;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.serverHostname !== this.props.serverHostname) {
            alert(`hostname changed to: ${this.props.serverHostname}`);
        }
        this.loadData();
    }
}

export default DataGrid;