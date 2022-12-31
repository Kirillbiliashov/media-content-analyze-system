const express = require('express');
const router = new express.Router();

const pool = require('./connection_pool');
const createResponse = require('./create_response');

const MESSAGE_SQL = {
    GET_ALL: 'SELECT * FROM message',
    GET: 'SELECT * FROM message WHERE id = :id',
    INSERT: 'INSERT INTO message(text, result_id) VALUES(:text, :resultId)',
    DELETE: 'DELETE FROM message WHERE id = :id',
    UPDATE: 'UPDATE message SET text = :text, result_id = :resultId WHERE id = :id'
};

router.get('/', (req, resp) => {
    pool.execute(MESSAGE_SQL.GET_ALL,
        createResponse('unable to retrieve messages', resp));
}).post('/', (req, resp) => {
    const {text} = req.body;
    const {resultId} = req.body;
    pool.execute(MESSAGE_SQL.INSERT, {text, resultId},
        createResponse('unable to save message', resp));
}).get('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(MESSAGE_SQL.GET, {id},
        createResponse(`unable to retrieve message by id ${id}`, resp));
}).delete('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(MESSAGE_SQL.DELETE, {id},
        createResponse(`unable to delete message by id ${id}`, resp));
}).put('/:id', (req, resp) => {
    const {id} = req.params;
    const {text} = req.body;
    const {resultId} = req.body;
    pool.execute(MESSAGE_SQL.UPDATE, {id, text, resultId},
        createResponse(`unable to update message by id ${id}`, resp));
});

module.exports = router;