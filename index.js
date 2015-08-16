/**
 * TCP Based Discard Service
 *
 * One discard service is defined as a connection based application on
 *   TCP.  A server listens for TCP connections on TCP port 9.  Once a
 *         connection is established any data received is thrown away.  No
 *         response is sent.  This continues until the calling user terminates
 *         the connection.
 */

require('net').createServer().listen(9);

