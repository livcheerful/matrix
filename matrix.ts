// Add your code here


class Matrix {
    points: number[][];
    width: number;
    height: number;
    
    constructor(points: number[][]) {
        this.points = points;
        this.width = points[0].length;
        this.height = points.length;
    }
    
    getRow(row: number): Vector {
        control.assert(row < this.height, 100);

        let vector = [];
        for (let i = 0; i < this.width; i++) {
            vector.push(this.points[row][i])
        }
        return new Vector(vector);
    }

    getCol(col: number): Vector {
        control.assert(col < this.width, 100);

        let vector = [];
        for (let i = 0; i < this.height; i++) {
            vector.push(this.points[i][col])
        }
        return new Vector(vector);
    }

    equals(other: Matrix): boolean {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (this.points[row][col] != other.points[row][col])
                    return false;
            }
        }
        return true
    }

    mult(right: Matrix): Matrix{
        control.assert(this.width == right.height, 100);

        let ret : number[][] = [];

        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < right.width; col++) {
                ret[row][col] = this.getRow(row).dot(right.getCol(col))
            }
        }

        return new Matrix(ret);
    }

    multV(right:Vector): Vector {
        control.assert(this.width == right.length, 100)

        let ret : number[] = [];
        for (let row = 0; row < this.height; row++) {
            ret.push(this.getRow(row).dot(right))
        }
        return new Vector(ret);
    }
}

class Vector {
    points: number[];
    length: number;
    constructor(points: number[]) {
        this.points = points;
        this.length = this.points.length
    }

    dot(right: Vector) : number {
        control.assert(this.length == right.length, 100)
        let val = 0;
        for (let i = 0; i < this.length; i++) {
            val += this.points[i] * right.points[i];
        }
        return val;
    }

    print(): string {
        let vec = "";
        for (let i = 0; i < this.length; i++) {
            if (i == this.length-1) {
                vec = vec + this.points[i]
            } else {
                vec = vec + this.points[i] + ", "
            }
        }
        return vec;
    }
}

let IDENTITY_MAT = new Matrix(
    [[1, 0, 0, 1],
     [0, 1, 0, 1],
     [0, 0, 1, 1],
     [0, 0, 0, 1],
    ])