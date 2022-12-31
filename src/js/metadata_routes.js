const express = require('express');
const router = new express.Router();

const pool = require('./connection_pool');

const createResponse = require('./create_response');

const METADATA_SQL = {
    GET_ALL: 'SELECT * FROM metadata',
    GET: 'SELECT * FROM metadata WHERE id = :id',
    INSERT: 'INSERT INTO metadata(`key`, value, message_id) VALUES(:key, :value, :messageId)',
    DELETE: 'DELETE FROM metadata WHERE id = :id',
    UPDATE: 'UPDATE metadata SET `key` = :key, value = :value, message_id = :messageId WHERE id = :id'
};

router.get('/', (req, resp) => {
    pool.execute(METADATA_SQL.GET_ALL,
        createResponse('unable to save metadata', resp));
}).post('/', (req, resp) => {
    const {key} = req.body;
    const {value} = req.body;
    const {messageId} = req.body;
    pool.execute(METADATA_SQL.INSERT, {key, value, messageId},
        createResponse('unable to save metadata', resp));
}).get('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(METADATA_SQL.GET, {id},
        createResponse(`unable to retrieve metadata by id ${id}`, resp));
}).delete('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(METADATA_SQL.DELETE, {id},
        createResponse(`unable to delete metadata by id ${id}`, resp));
}).put('/:id', (req, resp) => {
    const {id} = req.params;
    const {key} = req.body;
    const {value} = req.body;
    const {messageId} = req.body;
    pool.execute(METADATA_SQL.UPDATE, {id, key, value, messageId},
        createResponse(`unable to update metadata by id ${id}`, resp));
});

module.exports = router;