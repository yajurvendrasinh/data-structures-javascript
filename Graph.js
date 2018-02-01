/* GRAPH
 * A graph consists of a set of vertices and a set of edges. Think of a map of a US state. Each
 * town is connected with other towns via some type of road. A map is a type of graph
 * where each town is a vertex, and a road that connects two towns is an edge. Edges are
 * defined as a pair (v1, v2), where v1 and v2 are two vertices in a graph. A vertex can also
 * have a weight, which is sometimes called a cost.

 * A path is a sequence of vertices in a graph such that all vertices in the path are connected
 * by edges. The length of a path is the number of edges from the first vertex in the path
 * to the last vertex. A path can also consist of a vertex to itself, which is called a loop.
 * Loops have a length of 0.
*/


/* EXAMPLES OF GRAPH

 * Traffic Flow.
 * The vertices represent street intersections, and the edges represent the
 * streets. Weighted edges can be used to represent speed limits or the number of lanes.
 * Modelers can use the system to determine the best routes and the streets most likely to
 * suffer from traffic jams.

 * Any type of transportation system can be modeled using a graph. 
 * An airline can model its flight system using a graph. Each airport is a vertex, and each flight from
 * one vertex to another is an edge. A weighted edge can represent the cost of a flight from
 * one airport to another, or perhaps the distance from one airport to another, depending upon what is being modeled.

 * Computer networks, including local area networks and much broader networks such
 * as the Internet, are also frequently modeled with graphs. Another example of a realword
 * system that can be modeled by a graph is a consumer market, where vertices
 * represent both institutions (vendors) and consumers.
*/