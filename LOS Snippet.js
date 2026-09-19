    const LOS = (shooter,target) => {
        let shooterHex = HexMap[shooter.hexLabel];
        let targetHex = HexMap[target.hexLabel];
        let distance = shooter.Distance(target) + 1;
        let shooterHeight = shooterHex.elevation;
        if (shooter.type === "BattleMech") {
            shooterHeight += 2;
        }
        let targetHeights = [targetHex.elevation];
        //targetHeight, 2 for Battlemechs
        let th;
        if (target.type === "BattleMech") {
            th = 2;
        }
        for (let i=1;i<6;i++) {
            targetHeights.push(targetHex.elevation + ((th/5)*i));
        }

        //run shooterHeight -> each of target Heights, running through both paths
        //each path gets a 2 (LOS), 1 (LOS on one path blocked), 0 (LOS on both paths blocked)
        //work out the final LOS %, adding up the 3 heights divide by 10 to get a fraction

        let interCubes = [shooterHex.cube.linedraw(targetHex.cube),shooterHex.cube.linedraw2(targetHex.cube)];

        let pathTotal = 0; //variable to add LOS result to
        let terrainModifier = 0; //will be max of any hexes passed through

        let pt1 = new Point(0,shooterHeight);
        for (let i=0;i<5;i++) {
            let pt2 = new Point(distance,targetHeights[i]);
            let pt3,pt4,line1;
            for (let side=0;side<2;side++) {




            }
        }




    }