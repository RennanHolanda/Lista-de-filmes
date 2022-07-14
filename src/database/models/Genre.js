module.exports = (sequelize, DataType) => {
    const Genre = sequelize.define('Genre', 
        {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },

            name: DataType.STRING,

            ranking: DataType.INTEGER,

            active: DataType.TINYINT,

            created_at: DataType.DATE,

            updated_at: DataType.DATE
        },
        {
            tableName: 'genres',
            timestamps: false
        })
        return Genre;
}