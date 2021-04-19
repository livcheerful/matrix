class Face {
    vertexIndicies: Vector[];
    normalIndicies: Vector[];
}

class Model {
    verticies: Vector[];
    normals: Vector[];
    faces: Face[];

    addVertex(vertex: Vector) {
        this.verticies.push(vertex)
    }

    addNormal(normal: Vector) {
        this.normals.push(normal)
    }

    addFace(face: Face) {
        this.faces.push(face)
    }
}



function createModel(obj: string, comments = false): Model {
    const lines = obj.split("\n");

    lines.forEach(function(line: string, index: number) {
        const vals = line.split(" ");
        const t = comments? vals[0].substr(2): vals[0]
        let obj = new Model();
        switch(t) {
            case "v":
                obj.addVertex(new Vector([parseInt(vals[1]), parseInt(vals[2]), parseInt(vals[3])]))
                break;
            case "vn":
                obj.addNormal(new Vector([parseInt(vals[1]), parseInt(vals[2]), parseInt(vals[3])]))
                break;
            case "f":
                let face = new Face();
                face.add
                break;
            default:
                break;
        }
    })
}